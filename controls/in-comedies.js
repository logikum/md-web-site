'use strict';

function inComedies( ctx ) {
  return ctx.url.indexOf( ctx.translate( 'comedies' ) ) === 0 ? 'in' : '';
}

module.exports = inComedies;
