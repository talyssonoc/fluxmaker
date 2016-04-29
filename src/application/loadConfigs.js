import interopRequire from 'interop-require';

import { fileName, eachFromFolder, getConfig } from '../utils';

import devServerConfig from './default/devServer';

export default (application) => {
  const { env, pathTo } = application;

  const paths = {
    app: pathTo('app'),
    build: pathTo('build'),
    config: pathTo('config')
  };

  const defaultConfigs = {
    devServer: getConfig(devServerConfig, application)
  };

  const appConfig = interopRequire(pathTo('config', 'environments', env));

  eachFromFolder(paths.config, (configFile) => {
    const configObj = interopRequire(pathTo('config', configFile));
    const configName = fileName(configFile);
    const config = getConfig(configObj, application);
    const defaultConfig = defaultConfigs[configName];

    appConfig[configName] = {
      ...defaultConfig,
      ...config
    };
  });

  return {
    paths,
    config: {
      ...defaultConfigs,
      ...appConfig
    }
  };
};
