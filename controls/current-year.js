'use strict';

function currentYear( ctx ) {
  return  (new Date(Date.now()).getFullYear());
}

module.exports = currentYear;
