export default function registerCSSPipeline({ application }) {
  application.on('assets:open', readCSSFiles);
  application.on('assets:close', createCSSTask);
}

function readCSSFiles({ application, cli }) {
  cli.pipeline('css', () => {
    const gulp = cli.gulp;
    const { css } = application.config.assets;
    const cssPath = application.pathTo('app', 'styles', css.entry);

    return gulp.src(cssPath);
  });
}

function createCSSTask({ application, cli }) {
  cli.pipeline('css', (files) => {
    const gulp = cli.gulp;
    const cssDest = application.pathTo('build', 'css');

    return files.pipe(gulp.dest(cssDest));
  });

  cli.task('css:build', () => {
    const begin = cli._pipelines.css.shift();

    cli._pipelines.css.reduce((files, pipe) => pipe(files), begin());
  });
}
