'use strict';

function inHistories( ctx ) {
  return ctx.url.indexOf( ctx.translate( 'histories' ) ) === 0 ? 'in' : '';
}

module.exports = inHistories;
