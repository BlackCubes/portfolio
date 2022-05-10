import packageJson from '../../package.json';

import { IEnvironment, EnvironmentConfiguration } from './types';

const environment: IEnvironment = {
  apiRoute: 'https://api.eliastgutierrez.com',
  environment: EnvironmentConfiguration.Production,
  isProduction: process.env.NODE_ENV === 'production',
  name: packageJson.name,
  version: packageJson.version,
};

export default environment;
