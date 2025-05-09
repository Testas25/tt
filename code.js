// pages/_app.js
import '../styles/globals.css';
import Layout from '../components/Layout';
import { ThemeProvider } from '../lib/theme'; // We'll define this

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;