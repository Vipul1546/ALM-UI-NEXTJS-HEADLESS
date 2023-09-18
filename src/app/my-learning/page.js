import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MyLearningComp from './MyLearningComp';
import styles from './mylearning.module.scss';

const MyLearnig = () => {
  return <section className={styles.wrapper}>
    <Header />
    <MyLearningComp />
    <Footer />
  </section>;
};

export default MyLearnig;
