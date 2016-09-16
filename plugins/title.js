
function getTitle( ctx ) {
  return  merge( ctx.texts.title, ctx.definition.title, ' ♦ ' );
}

function merge( first, second, separator ) {
  var merged = first || '';
  merged += second ? separator + second : '';
  return merged;
}

module.exports = getTitle;
