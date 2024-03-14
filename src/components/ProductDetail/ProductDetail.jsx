'use client';
import CTA from '../CTA/CTA';
import ImageNext from '../Image/ImageNext';
import styles from './ProductDetail.module.scss';

const ProductDetail = ({ imagePath }) => (
  <section className={styles['product-detail']}>
    <div className={styles['product-detail__container']}>
      <div className={styles['product-detail__image-section']}>
        <div className={styles['image-container']}>
          <ImageNext imagePath={imagePath} imageClass="image-height-100" altText="image" />
        </div>
      </div>
      <div className={styles['product-detail__detail-section']}>
        <h2 className={styles['title']}>Product Name</h2>
        <div className={styles['product-description']}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis beatae, magni quae quia reprehenderit
          harum, libero rerum dolores, a doloribus ad corporis excepturi odio. Dolorem nihil at porro magnam aspernatur!
        </div>
        <div className={styles['product-price']}>Rs. 10000</div>
        <div className="product-detail__buttons">
          <CTA variant="theme-button">Add To Cart</CTA>
        </div>
      </div>
    </div>
  </section>
);

export default ProductDetail;
