'use strict';

const express = require( 'express' );
const path = require( 'path' );
const favicon = require( 'serve-favicon' );
const helmet = require( 'helmet' );
const compression = require( 'compression' );
const serveStatic = require( 'serve-static');
const bodyParser = require('body-parser');
const engine = require( '@logikum/md-site-engine' );

// Determine run mode.
const mode = process.env.NODE_ENV || 'development';

// Get configuration.
const configPath = 'config/' + mode + '.json';
const config = engine.getConfiguration( configPath );

// Set up Redis connection.
const session = require('express-session');
let RedisStore = require('connect-redis')(session);
const { createClient } = require('redis');
let redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

// Set up content manager.
engine.getContents( config );

// Create application.
const app = module.exports = express();

// Serve favicon.
app.use( favicon( path.join( __dirname, 'public/favicon.ico' ) ) );

// Secure the application.
app.use( helmet() );

// Set up session handling.
app.use( session( {
  store: new RedisStore({ client: redisClient }),
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
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
const server = app.listen( port, host, function () {
  console.log( 'Markdown demonstration site listening at http://%s:%s', host, port );
} );
