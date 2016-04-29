'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadDefaultTasks = loadDefaultTasks;
exports.executeTask = executeTask;

var _nodemon = require('./nodemon');

var _nodemon2 = _interopRequireDefault(_nodemon);

var _devServer = require('./devServer');

var _devServer2 = _interopRequireDefault(_devServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadDefaultTasks(cli) {
  cli.task('nodemon', (0, _nodemon2.default)(cli));
  cli.task('devServer', (0, _devServer2.default)(cli));
}

function executeTask(cli) {
  var argv = process.argv.slice(2);

  cli.gulp.start(argv[0]);
}