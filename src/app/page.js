import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from './page.module.css';

const Home = () => (
  <>
    <Header />
    <main className={styles.main}> Main Page </main>
    <Footer />
  </>
);

export default Home;
