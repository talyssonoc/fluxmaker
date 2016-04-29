'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gulpNodemon = require('gulp-nodemon');

var _gulpNodemon2 = _interopRequireDefault(_gulpNodemon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var application = _ref.application;

  return function () {
    var port = process.env.PORT || 3001;

    (0, _gulpNodemon2.default)({
      script: application.pathTo('start.js'),
      exec: 'babel-node',
      ext: 'js jsx',
      env: {
        PORT: port,
        NODE_ENV: 'development'
      },
      tasks: ['devServer']
    });

    application.log('Webpack Dev Server listening on port ' + port);
  };
};