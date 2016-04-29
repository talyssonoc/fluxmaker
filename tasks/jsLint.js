'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulpEslint = require('gulp-eslint');

var _gulpEslint2 = _interopRequireDefault(_gulpEslint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var application = _ref.application;
  var gulp = _ref.gulp;

  var glob = application.pathTo('app', '**', '*.{js,jsx}');

  return function () {
    return gulp.src(glob).pipe((0, _gulpEslint2.default)()).pipe(_gulpEslint2.default.format()).pipe(_gulpEslint2.default.failAfterError());
  };
};