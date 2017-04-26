'use strict';

function getTitle( ctx ) {
  return  merge( ctx.translate( 'title' ), ctx.metadata.title, ' ♦ ' );
}

function merge( first, second, separator ) {
  var merged = first || '';
  merged += second ? separator + second : '';
  return merged;
}

module.exports = getTitle;
