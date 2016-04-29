import Promise from 'bluebird';

import { registerDefaultTasks, executeTask } from './tasks';
import { registerPipelines } from './pipelines';

class CLI {
  constructor({ application, gulp }) {
    this.application = application;
    this.gulp = gulp;
  }

  start() {
    this.application.initialize()
      .then(() => this.createDefaultTasks())
      .then(() => this.createDefaultPipelines())
      .then(() => this.pipelinesEventLoop())
      .then(() => this.executeTask())
      .catch((error) => {
        throw error;
      });
  }

  createDefaultTasks() {
    registerDefaultTasks(this);
  }

  createDefaultPipelines() {
    this._pipelines = registerPipelines(this);
  }

  pipelinesEventLoop() {
    const application = this.application;
    const payload = { application, cli: this };
    const eventLoop = [
      'assets:open',
      'assets:pre',
      'assets:post',
      'assets:close'
    ];

    return eventLoop.reduce((chain, event) => {
      return chain.then(() => application.emitAsync(event, payload));
    }, Promise.resolve());
  }

  executeTask() {
    executeTask(this);
  }

  task(...args) {
    this.gulp.task(...args);
  }

  pipeline(asset, pipe) {
    this._pipelines[asset].push(pipe);
  }
}

export default CLI;
