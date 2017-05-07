'use strict';

var express = require( 'express' );
var path = require( 'path' );
var favicon = require( 'serve-favicon' );
var helmet = require( 'helmet' );
var compression = require( 'compression' );
var serveStatic = require( 'serve-static') ;
var session = require( 'express-session' );
var RedisStore = require( 'connect-redis' )( session );
var bodyParser = require('body-parser');
var engine = require( 'md-site-engine' );

// Determine run mode.
var mode = process.env.NODE_ENV || 'development';

// Get configuration.
var configPath = 'config/' + mode + '.json';
var config = engine.getConfiguration( configPath );

// Set up content manager.
engine.getContents( config );

// Create application.
var app = module.exports = express();

// Serve favicon.
app.use( favicon( path.join( __dirname, 'public/favicon.ico' ) ) );

// Secure the application.
app.use( helmet() );

// Set up session handling.
app.use( session( {
  store: new RedisStore( config.redis ),
  secret: config.session.secret,
  resave: config.session.resave,
  saveUninitialized: config.session.saveUninitialized
} ) );

// Compress all requests.
app.use( compression() );

// Serve static files.
app.use( serveStatic( 'public', { index: false } ) );

// Get posted data for search.
app.use( bodyParser.urlencoded( { extended: true } ) );

// Set site routes.
engine.setRoutes( app, { }, mode );

// Start web server.
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;
var server = app.listen( port, host, function () {
  console.log( 'Markdown demonstration site listening at http://%s:%s', host, port );
} );
