'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCSSPipeline;
function createCSSPipeline(_ref) {
  var application = _ref.application;
  var gulp = _ref.gulp;
  var cssConfig = application.config.assets.css;

  var cssPath = application.pathTo('app', 'styles', cssConfig.entry);
  var cssPipeline = [function () {
    return gulp.src(cssPath);
  }];

  application.on('assets:post', saveBuildedCSS);
  application.on('assets:close', createCSSTask);

  return cssPipeline;
}

function saveBuildedCSS(_ref2) {
  var application = _ref2.application;
  var cli = _ref2.cli;

  cli.pipeline('css', function (files) {
    var gulp = cli.gulp;
    var cssDest = application.pathTo('build', 'css');

    return files.pipe(gulp.dest(cssDest));
  });
}

function createCSSTask(_ref3) {
  var application = _ref3.application;
  var cli = _ref3.cli;

  cli.task('css:build', function () {
    var begin = cli._pipelines.css.shift();
    cli._pipelines.css.reduce(function (files, pipe) {
      return pipe(files);
    }, begin());
  });
}