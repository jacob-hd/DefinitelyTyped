import mjml2html = require('mjml');

const simple_test = mjml2html("<mjml>");
const html = simple_test.html;
const errors = simple_test.errors;
let formattedMessage = errors[0].formattedMessage;
formattedMessage = "force string test";

const minimal_opts_test = mjml2html("<mjml>", {beautify: true});
const validation_level_test = mjml2html("<mjml>", {validationLevel: "strict"});