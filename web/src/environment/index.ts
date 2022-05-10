import development from './environment.dev';
import production from './environment.prod';
import staging from './environment.staging';
import { EnvironmentConfiguration, IEnvironment } from './types';

const getEnv = (): IEnvironment => {
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.REACT_APP_CONFIGURATION === EnvironmentConfiguration.Staging
  ) {
    return staging;
  }

  if (process.env.NODE_ENV === 'production') {
    return production;
  }

  return development;
};

const environment: IEnvironment = Object.freeze(getEnv());

export default environment;
