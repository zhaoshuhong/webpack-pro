(function(modules) { // webpackBootstrap
var installedModules = {};
function __webpack_require__(moduleId) {
if(installedModules[moduleId]) {
return installedModules[moduleId].exports;
}
var module = installedModules[moduleId] = {
i: moduleId,
l: false,
exports: {}
};
modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
module.l = true;
return module.exports;
}
return __webpack_require__(__webpack_require__.s = "./src\index.js");
})
({

"./src\index.js":
(function(module, exports, __webpack_require__) {
eval(`let a = __webpack_require__("./src\\a.js");

__webpack_require__("./src\\index.less"); // console.log('index',a);`);
}),

"./src\a.js":
(function(module, exports, __webpack_require__) {
eval(`let b = __webpack_require__("./src\\base\\b.js");

module.exports = 'a' + b;
console.log('this is a and b');`);
}),

"./src\base\b.js":
(function(module, exports, __webpack_require__) {
eval(`module.exports = 'b';`);
}),

"./src\index.less":
(function(module, exports, __webpack_require__) {
eval(`let style = document.createElement('style');
style.innerHTML = "body {\\n  color: white;\\n  background-color: red;\\n}\\nbody h {\\n  color: white;\\n}\\n";
document.head.appendChild(style);`);
}),


});