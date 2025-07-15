import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useAuth } from '../utils/useAuth';

function MyApp({ Component, pageProps }: AppProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user && router.pathname !== '/login' && router.pathname !== '/register') {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;