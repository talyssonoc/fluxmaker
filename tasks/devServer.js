'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _interopRequire = require('interop-require');

var _interopRequire2 = _interopRequireDefault(_interopRequire);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var application = _ref.application;

  var webpackPath = application.pathTo('webpack.config');
  var webpackConfig = (0, _interopRequire2.default)(webpackPath);

  return function (callback) {
    var publicPath = {
      publicPath: webpackConfig.output.publicPath
    };

    new _webpackDevServer2.default((0, _webpack2.default)(webpackConfig), _extends({}, publicPath, application.config.devServer)).listen(application.config.port, callback);
  };
};