import Card from '@/components/Card/Card';
import Container from '@/components/Container/Container';
import Flex from '@/components/Flex/Flex';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import styles from './page.module.scss';


const Home = () => (
  <>
    <Header />
    <HeroBanner />
    <main className={styles.main}>
      <section className={styles['last-preview']}>
        <Container width="90%" background="none">
          <Flex margin='0 0 32px' container justifyContent='space-between' alignItems='center'><h2 className={styles['section-heading']}>
            Resume Last Tuts
          </h2><a className={styles.link} variant={'link'} href="#">
              View All
            </a></Flex>
          <Card
            variant={'secondary'}
            imagePath={'https://picsum.photos/350/221'}
            altText={'test image'}
            authorName={'Lorem'}
            authorTitle={'Ipsume'}
            students={`Rs. 1400`}
            title={'React Native'}
            duration={`Duration: 45:00`}
            icon={'fa-bookmark'}
            category={'some type'}
          />
        </Container>
      </section>
      <section className={styles['category-section']}>
        <Container width="90%" background="none">

          {/* <Heading className={styles['section-heading']} type="h2" weight="heading-extra-bold">
          Recommended Courses
        </Heading> */}
          <Flex margin='0 0 32px' container justifyContent='space-between' alignItems='center'><h2 className={styles['section-heading']}>
            Recommended Courses
          </h2><a className={styles.link} variant={'link'} href="#">
              View All
            </a></Flex>
          <Flex container gap='16px' className={styles['list-row']} flexWrap='wrap'>
            {Array(8).fill().map((_, idx) => {
              return <Card key={idx} variant={`${styles.tirtiary}`}
                imagePath={`https://picsum.photos/350/22${idx}`}
                altText={'test image'}
                username={'John Doe'}
                likes={380}
                comments={70} />
            })}
          </Flex>
        </Container>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
