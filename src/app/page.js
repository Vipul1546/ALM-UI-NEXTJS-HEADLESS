'use client'
import IconUser from '@/assets/icons/IconUser';
import Card from '@/components/Card/Card';
import Carousel from '@/components/Carousel/Carousel';
import Container from '@/components/Container/Container';
import Counter from '@/components/Counter';
import Flex from '@/components/Flex/Flex';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Heading from '@/components/Heading/Heading';
import HeroBanner from '@/components/HeroBanner';
import Link from 'next/link';
import SlkillsBg from './banner-parallex.jpeg';
import styles from './page.module.scss';

const Home = () => {
  const testimonialCarousel = {
    arrows: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  }

  const lastPrevCarousel = {
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  }


  return (
    <>
      <Header />
      <HeroBanner />
      <main className={styles.main}>
        <section className={styles['count-home']}>
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
        </section>
        <section className={styles.insights}>
          <Container>
            <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">Insights</Heading>
            <ul>
              <li>
                <div className={styles.thumb}><img src='https://lmstheme.wpenginepowered.com/wp-content/themes/lms/images/demo/custom-icon1.png' alt='' /></div>
                Best Stimulations
              </li>
              <li>
                <div className={styles.thumb}><img src='https://lmstheme.wpenginepowered.com/wp-content/themes/lms/images/demo/custom-icon2.png' alt='' /></div>
                Group Seminars
              </li>
              <li>
                <div className={styles.thumb}><img src='https://lmstheme.wpenginepowered.com/wp-content/themes/lms/images/demo/custom-icon3.png' alt='' /></div>
                Analysed Syllabus
              </li>
              <li>
                <div className={styles.thumb}><img src='https://lmstheme.wpenginepowered.com/wp-content/themes/lms/images/demo/custom-icon4.png' alt='' /></div>
                Pratical Training
              </li>
            </ul>
          </Container>
        </section>
        <section className={styles['category-section']}>
          <Container>
            <Flex margin='0 0 32px' container justifyContent='space-between' alignItems='center'>
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">Recommended Courses</Heading>
              <Link className={styles.link} variant={'link'} href="#">
                View All
              </Link>
            </Flex>
            <Carousel settings={testimonialCarousel}>
              {Array(6).fill().map((_, idx) => {
                return <Card key={idx} variant={'tertiary'}
                  imagePath={`https://picsum.photos/350/22${idx}`}

                  altText={'test image'}
                  authorName={'John Doe'}
                  authorTitle={'React Native'}
                  students={`Rs. 1400`}
                  title={'React Native Recommended Courses'}
                  duration={`Duration: 45:00`}
                  icon={<IconUser />}
                  category={'some type'} />
              })}
            </Carousel>
          </Container>
        </section>
        <section className={styles.sectionSkills} style={{ backgroundImage: `url(${SlkillsBg.src})` }}>
          <Container>
            <Flex container justifyContent='space-between' alignItems='center'>
              <div className={styles.elem}>
                {/* <i className='fas fa-js'></i> */}
                JS
              </div><div className={styles.elem}>
                {/* <i className='fas fa-ruby'></i> */}
                Ruby
              </div><div className={styles.elem}>
                {/* <i className='fas fa-android'></i> */}
                Android
              </div><div className={styles.elem}>
                {/* <i className='fas fa-python'></i> */}
                Python
              </div><div className={styles.elem}>
                {/* <i className='fas fa-graphql'></i> */}
                GraphQL
              </div>
            </Flex>
          </Container>
        </section>
        <section className={styles.testimonial}>
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
        </section>
        <section className={styles['last-preview']}>
          <Container>
            <Flex margin='0 0 32px' container justifyContent='space-between' alignItems='center'>
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
                Resume Last Tuts
              </Heading>
              <Link className={`${styles.link} ${styles['link-light']}`} variant={'link'} href="#">
                View All
              </Link>
            </Flex>
            <Carousel settings={lastPrevCarousel}>
              {Array(4).fill().map((_, idx) => {
                return <Card
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
              })}
            </Carousel>

          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
};

export default Home;
