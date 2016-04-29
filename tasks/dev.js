'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

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
    new _webpackDevServer2.default((0, _webpack2.default)(webpackConfig), {
      publicPath: webpackConfig.output.publicPath,
      hot: true,
      historyApiFallback: true,
      quiet: true,
      proxy: {
        '*': { target: 'http://localhost:3001' }
      }
    }).listen(3000, callback);
  };
};