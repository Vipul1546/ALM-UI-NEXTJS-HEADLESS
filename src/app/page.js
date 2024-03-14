'use client';
import IconUser from '@/assets/icons/IconUser';
import Card from '@/components/Card/Card';
import Carousel from '@/components/Carousel/Carousel';
import Container from '@/components/Container/Container';
import Flex from '@/components/Flex/Flex';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Heading from '@/components/Heading/Heading';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import SlkillsBg from './banner-parallex.jpeg';
import ProductP1 from './img/AdobeStock_p1.jpeg';
import ProductP3 from './img/AdobeStock_p3.jpeg';
import ProductP4 from './img/AdobeStock_p4.jpeg';
import ProductP2 from './img/p2.png';
import singleProduct1 from './img/products/b1.jpeg';
import singleProduct2 from './img/products/b2.png';
import singleProduct3 from './img/products/b3.png';
import singleProduct4 from './img/products/b4.jpeg';
import singleProduct5 from './img/products/b5.png';
import singleProduct6 from './img/products/b6.jpeg';
import './newcss.scss';
import styles from './page.module.scss';
const Home = () => {
  const testimonialCarousel = {
    arrows: true,
    slidesToShow: 4,
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
      <HeroBanner />
      <main className={styles.main}>
        {/* <section className={styles['count-home']}>
          <Container>
            <ul>
              <li>
                <Counter startValue={0} endValue={332} />
                Courses
              </li>
              <li>
                <Counter startValue={0} endValue={1403} />
                Members
              </li>
              <li>
                <Counter startValue={0} endValue={60} />
                Authors
              </li>
              <li>
                <Counter startValue={0} endValue={120} />
                Subjects
              </li>
            </ul>
          </Container>
        </section> */}
        {/* <section className={styles['section-intro']}>
          <Container>
            <div className='col'>
              <TextAndMedia 
              title="LONDON BEAUTY ACADEMY BY AMA" 
              subtitle="Nurturing International Beauty Professionals with Perfection" 
              text="LONDON BEAUTY ACADEMY BY AMA a comprehensive Beauty Academy offering courses in Makeup Hair Skin Nails Nutrition Salon Management, Hair extension, eyelashes extension and others, LONDON BEAUTY ACADEMY BY AMA is the finest and best International Beauty Academy in India..."
              imagePath="/06.jpeg"
              ></TextAndMedia>
            </div>
            <div className='col'></div>
          </Container>
        </section> */}
        {/* <section className={styles.sectionSkills} style={{ backgroundImage: `url(${beautiProduct.src})` }}>
        <Container>
          <a href='/product-listing' className={styles['explore-product']}>
                Explore Products
          </a>
          </Container>
        </section> */}
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
                    <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                  <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                  <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
                <div className={styles['background-texture']}></div>
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
        <section className={styles['category-section']}>
          <Container>
            <Flex margin="0 0 32px" container justifyContent="space-between" alignItems="center">
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
                Recommended Courses
              </Heading>
              <Link className={styles.link} variant={'link'} href="/course-listing">
                View All
              </Link>
            </Flex>
            <Carousel settings={lastPrevCarousel}>
              {Array(3)
                .fill()
                .map((_, idx) => {
                  return (
                    <Card
                      key={`homepage_${idx}`}
                      variant={'tertiary'}
                      imagePath={`https://picsum.photos/350/22${idx}`}
                      altText={'test image'}
                      authorName={'John Doe'}
                      authorTitle={'React Native'}
                      students={`Rs. 1400`}
                      title={'LONDON BEAUTY ACADEMY BY AMA Certification Courses'}
                      duration={`Duration: 45:00`}
                      desc={
                        'From Make-up School to Nail Art courses, London Academy offers a number of world-class courses and training programs.'
                      }
                      icon={<IconUser />}
                      category={'some type'}
                      href={'/course-listing'}
                    />
                  );
                })}
            </Carousel>
          </Container>
        </section>
        {/* <section className="testimonial-section">
          <div className="container" id="collaboration">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="ttm-skill-wrapper col-bg-img-five ttm-col-bgimage-yes ttm-bg res-767-h-auto ml_390 res-767-ml_100 res-767-mr_20">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                  <div className="layer-content spacing-5">
                    <div className="section-title with-desc clearfix text-right image-scale-hover">
                      <img src="/bpro-img.jpg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 ttm-textcolor-white">
                <div className="col-bg-img-six ttm-col-bgimage-yes ttm-bg">
                  <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" />
                  <div className="spacing-7 position-relative">
                    <span className="ttm-testi-quote">99</span>
                    <div className="section-title with-desc clearfix mb-0">
                      <div className="title-header">
                        <img src="/white-logo.png" />
                        <p className="mt-20">
                          Beauty Professionals Association a division of National Association for Professionals and
                          Skill Certification Council (NAPSCC) the only organisation of its kind for the Beauty industry
                          to elevate and empower the beauty professionals with its core values and to Educate,
                          Encourage, Evolve, Empower, Embrace &amp; Excel by advocating &amp; promoting the beauty
                          Profession as one of the top career choices in India and globally.
                        </p>
                        <p>
                          BPRO has Endorsed London Academy to provide quality education and training and develop
                          International Beauty professionals keeping in mind the dynamics of the international beauty
                          industry, BPRO provide a platform to enhance the reach to elevate the Beauty professionals and
                          the Industry. This platform aims at overcoming the taboos and stereotypes around the beauty
                          industry by bringing together all Beauty professionals and the beauty industry to start a
                          dialogue on important issues that need to be addressed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
         <section className={styles.sectionSkills} style={{ backgroundImage: `url(${SlkillsBg.src})` }}>
        <Container>
            <div className={styles['background-texture']}></div>
            <a href='/course-listing' className={styles['explore-product']}>
              <h2>Become a Certified Beauty Professional</h2>
              <p>Explore our courses: Transforming Passion into Expertise</p>
            </a>
          </Container>
        </section>
        {/* <section className={styles.sectionSkills} style={{ backgroundImage: `url(${SlkillsBg.src})` }}>
          <Container>
            <Flex container justifyContent="space-between" alignItems="center">
              <div className={styles.elem}>
                Necklace
              </div>
              <div className={styles.elem}>
                Rings
              </div>
              <div className={styles.elem}>
                Earings
              </div>
              <div className={styles.elem}>
                Bracelets
              </div>
              <div className={styles.elem}>
                Anklets
              </div>
            </Flex>
          </Container>
        </section> */}
        {/* <section className={styles.testimonial}>
          <Container>
            <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">What our customer say</Heading>
            <Carousel settings={testimonialCarousel}>
              <div className={styles.card}>
                <p>The explanations are clear, the teachers are responsible and friendly, and the homework is real practice</p>
                <div className={styles['reviews__card-author']}>
                  <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55023c6a906cc955301_customers_ava-02.webp" loading="lazy" alt="" />
                  <div>
                    <div className={styles.dp}>Rob Zuber</div><div className={styles["reviews__card-spec"]}>CEO</div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <p>I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client</p>
                <div className={styles['reviews__card-author']}>
                  <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55053e4ac52b532b18d_customers_ava-03.webp" loading="lazy" alt="" />
                  <div>
                    <div className={styles.dp}>Melanle Pickett</div><div className={styles["reviews__card-spec"]}>IT Manager</div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <p>I really like the speakers of the course and the quality of the lectures. There is always feedback</p>
                <div className={styles['reviews__card-author']}>
                  <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55026a5a46ec6f5139a_customers_ava-01.webp" loading="lazy" alt="" />
                  <div>
                    <div className={styles.dp}>Regis Wilson</div><div className={styles["reviews__card-spec"]}>Engineer</div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <p>On the course "Data Analyst in Python" everything is very interesting and informative, very detailed material</p>
                <div className={styles['reviews__card-author']}>
                  <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/6182b50b8835e6b322cd154f_customers_ava-06.webp" loading="lazy" alt="" />
                  <div>
                    <div className={styles.dp}>Chris Hemsworth</div><div className={styles["reviews__card-spec"]}>Analyst</div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <p>The explanations are clear, the teachers are responsible and friendly, and the homework is real practice</p>
                <div className={styles['reviews__card-author']}>
                  <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55023c6a906cc955301_customers_ava-02.webp" loading="lazy" alt="" />
                  <div>
                    <div className={styles.dp}>Rob Zuber</div><div className={styles["reviews__card-spec"]}>CEO</div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <p>I learned a lot of new things, I immediately apply my knowledge in my work, found myself a new client</p>
                <div className={styles['reviews__card-author']}>
                  <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55053e4ac52b532b18d_customers_ava-03.webp" loading="lazy" alt="" />
                  <div>
                    <div className={styles.dp}>Melanle Pickett</div><div className={styles["reviews__card-spec"]}>IT Manager</div>
                  </div>
                </div>
              </div>
              <div className={styles.card}>
                <p>I really like the speakers of the course and the quality of the lectures. There is always feedback</p>
                <div className={styles['reviews__card-author']}>
                  <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/617fa55026a5a46ec6f5139a_customers_ava-01.webp" loading="lazy" alt="" />
                  <div>
                    <div className={styles.dp}>Regis Wilson</div><div className={styles["reviews__card-spec"]}>Engineer</div>
                  </div></div>
              </div>
              <div className={styles.card}>
                <p>On the course "Data Analyst in Python" everything is very interesting and informative, very detailed material</p>
                <div className={styles['reviews__card-author']}>
                  <img src="https://assets.website-files.com/617fa48948c7ab24b715140e/6182b50b8835e6b322cd154f_customers_ava-06.webp" loading="lazy" alt="" />
                  <div>
                    <div className={styles.dp}>Chris Hemsworth</div><div className={styles["reviews__card-spec"]}>Analyst</div>
                  </div>
                </div>
              </div>
            </Carousel>
          </Container>
        </section> */}
        {/* <section className={styles['last-preview']}>
          <Container>
            <Flex margin="0 0 32px" container justifyContent="space-between" alignItems="center">
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
                Resume Last Tuts
              </Heading>
              <Link className={`${styles.link} ${styles['link-light']}`} variant={'link'} href="#">
                View All
              </Link>
            </Flex>
            <Carousel settings={testimonialCarousel}>
              {Array(6)
                .fill()
                .map((_, idx) => {
                  return (
                    <Card
                      key={idx}
                      variant={'tertiary'}
                      imagePath={`https://picsum.photos/350/22${idx}`}
                      altText={'test image'}
                      authorName={'Roxane Gay'}
                      authorTitle={'Writer & Editor'}
                      students={'43,221 Students'}
                      title={'Creative writing: Crafting Personal Essays with impact'}
                      duration={'1h 1m'}
                      icon={<IconUser />}
                      category={'Original'}
                    />
                  );
                })}
            </Carousel>
          </Container>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
