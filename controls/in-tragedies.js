'use strict';

function inTragedies( ctx ) {
  return ctx.url.indexOf( ctx.translate( 'tragedies' ) ) === 0 ? 'in' : '';
}

module.exports = inTragedies;
