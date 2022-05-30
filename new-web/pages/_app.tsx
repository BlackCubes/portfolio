import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { nextReduxWrapper } from 'app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default nextReduxWrapper.withRedux(MyApp);
