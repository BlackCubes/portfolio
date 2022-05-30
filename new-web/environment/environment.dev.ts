import packageJson from '../package.json';

import { IEnvironment, EnvironmentConfiguration } from './types';

const environment: IEnvironment = {
  apiRoute: 'http://127.0.0.1:8000',
  environment: EnvironmentConfiguration.Development,
  isProduction: process.env.NODE_ENV === 'production',
  name: packageJson.name,
  version: packageJson.version,
};

export default environment;
