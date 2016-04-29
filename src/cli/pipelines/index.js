import registerCSSPipeline from './css';

export function registerPipelines(cli) {
  registerCSSPipeline(cli);

  return {
    css: []
  };
}
