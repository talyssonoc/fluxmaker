'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadPipelines = loadPipelines;

var _css = require('./css');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadPipelines(cli) {
  var css = (0, _css2.default)(cli);

  return {
    css: css
  };
}