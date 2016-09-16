
var CAPTCHA_JS = '<script src="https://www.google.com/recaptcha/api.js?hl=§"></script>';

function getDescription( ctx ) {
  return ctx.baseUrl == '/kapcsolat' || ctx.baseUrl == '/contact' ?
    CAPTCHA_JS.replace( /§/, ctx.language ) : '';
}

module.exports = getDescription;
