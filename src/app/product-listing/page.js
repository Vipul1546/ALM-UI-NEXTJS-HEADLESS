import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductList from './ProductList/index';
import styles from './page.module.scss';

const ProductListing = ()=>{
    return (
        <>
          <Header />
          <main className={styles.main}>
            <ProductList />
          </main>
          <Footer />
        </>
      );
}

export default ProductListing;