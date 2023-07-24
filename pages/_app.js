import { Provider } from 'next-auth/client';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
