"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundColor = '#262335';
var backgroundProperty = "background-color: " + backgroundColor;
var yellow = '#FEDE5D';
var pink = '#D86FD4';
var orange = '#F88839';
var gray = '#E2E1E5';
var grayDarker = '#B3AEAE';
var turquoise = '#36F5F3';
var lightBlue = '#84C9F4';
function errorHandler(err) {
    console.group('%c 🚨 Formcarry Error 🚨', 'background: #E44141; color: #fff');
    console.table(err);
    console.log("%cif you want to disable debugging, just set debug to false like:", 'color: #11C759');
    console.log('%cconst %c{state, submit} %c= %cuseForm%c(%c{ %cdebug%c: %cfalse %c}%c);', backgroundProperty + "; color: " + yellow, backgroundProperty + "; color: " + pink, backgroundProperty + "; color: " + gray, backgroundProperty + "; color: " + turquoise, backgroundProperty + "; color: " + pink, backgroundProperty + "; color: " + turquoise, backgroundProperty + "; color: " + yellow, backgroundProperty + "; color: " + grayDarker, backgroundProperty + "; color: " + orange, backgroundProperty + "; color: " + lightBlue, backgroundProperty + "; color: " + pink);
    console.groupEnd();
}
exports.errorHandler = errorHandler;
function noIdHandler() {
    console.log('%c💥 Please set your form ID, you can get it from your dashboard: https://formcarry.com/profile/my-forms', 'background-color: #FCB56D; color: #000');
    console.log('%cconst %c{state, submit} %c= %cuseForm%c(%c{ %cid%c: %c"Your Form ID" %c}%c);', backgroundProperty + "; color: " + yellow, backgroundProperty + "; color: " + pink, backgroundProperty + "; color: " + gray, backgroundProperty + "; color: " + turquoise, backgroundProperty + "; color: " + pink, backgroundProperty + "; color: " + turquoise, backgroundProperty + "; color: " + yellow, backgroundProperty + "; color: " + grayDarker, backgroundProperty + "; color: " + orange, backgroundProperty + "; color: " + lightBlue, backgroundProperty + "; color: " + pink);
}
exports.noIdHandler = noIdHandler;
//# sourceMappingURL=handler.js.map