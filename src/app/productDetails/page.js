"use client"
import Carousel from '@/components/Carousel/Carousel';
import Container from '@/components/Container/Container';
import Flex from '@/components/Flex/Flex';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Heading from '@/components/Heading/Heading';
import ProductDetail from '@/components/ProductDetail/ProductDetail';
import Link from 'next/link';
import SlkillsBg from '../banner-parallex.jpeg';
import ProductP1 from '../img/AdobeStock_p1.jpeg';
import ProductP3 from '../img/AdobeStock_p3.jpeg';
import ProductP4 from '../img/AdobeStock_p4.jpeg';
import ProductP2 from '../img/p2.png';
import singleProduct1 from '../img/products/b1.jpeg';
import singleProduct2 from '../img/products/b2.png';
import singleProduct3 from '../img/products/b3.png';
import singleProduct4 from '../img/products/b4.jpeg';
import singleProduct5 from '../img/products/b5.png';
import singleProduct6 from '../img/products/b6.jpeg';
import styles from '../page.module.scss';

const ProductListing = ()=>{
    window.scrollTo(0, 0);
    const lastPrevCarousel = {
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };

      const productCarousel = {
        arrows: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };
    return (
        <>
          <Header />
          <main className={styles.main}>
            <Container>
                <Flex margin="100px 0 32px 0" container justifyContent="space-between" alignItems="center">
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
               Product Detail Page
              </Heading>
            </Flex>
                <ProductDetail imagePath={singleProduct1.src}/>
            </Container>

            <section className={styles.insights}>
          <Container>
          <Flex margin="0 0 32px" container justifyContent="space-between" alignItems="center">
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
                Products
              </Heading>
              <Link className={styles.link} variant={'link'} href="/product-listing">
                  View All
              </Link>
            </Flex>
            <ul>
              <li className={styles['product-section']}>
                <div>
                  <Link className={styles.link} variant={'link'} href="/product-listing">
                    <img
                      src={ProductP1.src}
                      alt="p1"
                    />
                   <span>Best Seller</span> 
                  </Link>
                </div>
              </li>
              <li className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/product-listing">
                    <img
                      src={ProductP2.src}
                      alt="p2"
                    />
                    <span>All Skincare</span> 
                  </Link>
                </div>
              </li>
              <li className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/product-listing">
                    <img
                      src={ProductP3.src}
                      alt="p3"
                    />
                    <span>Serumes</span> 
                  </Link>
                </div>
              </li>
              <li className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/product-listing">
                    <img
                      src={ProductP4.src}
                      alt="p4"
                    />
                    <span>Men's Skincare</span> 
                  </Link>
                </div>
              </li>
            </ul>
            <Flex margin="32px 0 0 0" container justifyContent="space-between" alignItems="center">
              <Heading customClass={styles['section-heading']} type="h3" weight="heading-extra-bold">
                Recommended Products
              </Heading>
              <Link className={styles.link} variant={'link'} href="/product-listing">
                  View All
              </Link>
            </Flex>
            <div className={styles['single-product-section']}>
          <Carousel settings={productCarousel}>
          <div className={styles['product-section']}>
                <div>
                  <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct6.src}
                      alt="p1"
                    />
                   <span>Ultra Facial Cleanser</span> 
                   <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct5.src}
                      alt="p2"
                    />
                    <span>Ultra Facial Cleanser</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct1.src}
                      alt="p3"
                    />
                    <span>Midnight Recovery Concentrate</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct2.src}
                      alt="p4"
                    />
                    <span>Super Multi-Corrective Cream</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct3.src}
                      alt="p4"
                    />
                    <span>Ultra Facial Cleanser</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct4.src}
                      alt="p4"
                    />
                    <span>Ultra Facial Cleanser</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                  <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct6.src}
                      alt="p1"
                    />
                   <span>Ultra Facial Cleanser</span> 
                   <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct5.src}
                      alt="p2"
                    />
                    <span>Ultra Facial Cleanser</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct1.src}
                      alt="p3"
                    />
                    <span>Midnight Recovery Concentrate</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct2.src}
                      alt="p4"
                    />
                    <span>Super Multi-Corrective Cream</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct3.src}
                      alt="p4"
                    />
                    <span>Ultra Facial Cleanser</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
              <div className={styles['product-section']}>
                <div>
                <Link className={styles.link} variant={'link'} href="/productDetails">
                    <img
                      src={singleProduct4.src}
                      alt="p4"
                    />
                    <span>Ultra Facial Cleanser</span> 
                    <span>₹2,150.00</span>
                  </Link>
                </div>
              </div>
          </Carousel>
          </div>
          </Container>
        </section>
        <section className={styles.sectionSkills} style={{ backgroundImage: `url(${SlkillsBg.src})`, margin:'60px 0 0 0'}}>
        <Container>
            <a href='/course-listing' className={styles['explore-product']}>
              <h2>Become a Certified Beauty Professional</h2>
              <p>Explore our courses: Transforming Passion into Expertise</p>
            </a>
        </Container>
        </section>
          </main>
          <Footer />
        </>
      );
}

export default ProductListing;