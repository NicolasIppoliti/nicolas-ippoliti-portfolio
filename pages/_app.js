import '../styles/globals.css';

// Next translations
import { appWithTranslation } from 'next-i18next';

// Components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// Router
import { useRouter } from 'next/router';

// Framer motion
import { AnimatePresence, motion } from 'framer-motion';

// Toaster
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className='h-full'>
          <Transition/>
          <Toaster position="top-right" reverseOrder={false} />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
