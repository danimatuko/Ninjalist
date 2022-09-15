import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className='content'>
      <Head>
        <title>Ninja List | Home</title>
        <meta
          name='keywords'
          content='ninjas'
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
