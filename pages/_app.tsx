import '../styles/global.css';
import 'katex/dist/katex.min.css';

import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
