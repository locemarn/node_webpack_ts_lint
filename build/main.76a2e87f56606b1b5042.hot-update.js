exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar express = __webpack_require__(/*! express */ \"express\");\nvar app = express();\napp.get('/', function (req, res) {\n    res.status(200).json({\n        name: 'Marcelo Nogueira da Silva',\n        age: 36,\n        graduation: \"Computer Engineer\",\n        test: 'aki',\n        reload: true\n    });\n});\nvar port = 8000;\napp.listen(port, function () { return console.log(\"server running on port: \" + port); });\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};