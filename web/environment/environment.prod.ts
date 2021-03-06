import packageJson from '../package.json';

import { IEnvironment, EnvironmentConfiguration } from './types';

const environment: IEnvironment = {
  apiRoute: 'https://blackcubes.pythonanywhere.com',
  environment: EnvironmentConfiguration.Production,
  isProduction: process.env.NODE_ENV === 'production',
  name: packageJson.name,
  version: packageJson.version,
  webRoute: 'https://www.eliastgutierrez.com',
};

export default environment;
