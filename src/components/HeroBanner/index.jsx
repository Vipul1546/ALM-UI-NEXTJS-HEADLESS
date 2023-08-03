import Container from '../Container/Container';
import Flex from '../Flex/Flex';
import Heading from '../Heading/Heading';
import styles from './herobanner.module.scss';

const HeroBanner = () => {
  return (
    <div className={styles.banner}>
      <Container variant={styles.flex} background="none" width="85%">
        <Flex container justifyContent="space-between" alignItems="flex-end" height="100%">
          <summary className={styles.summary}>
            <Heading className={styles.title} type="h1" weight="heading-extra-bold">
              We Have All Kinds Of <span>Courses</span> Collection
            </Heading>
            <div className={styles.search}>
              <input type="text" placeholder="Search" />
              <button type="button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className={styles['popular-search']}>
              <label>Popular Search:</label>
              <ul>
                <li>Design</li>
                <li>Development</li>
                <li>Marketing</li>
                <li>Music</li>
              </ul>
            </div>
          </summary>
          <img src={'https://edon-ng.envytheme.com/assets/images/banner/banner-img.png'} alt="" />
        </Flex>
      </Container>
    </div>
  );
};

export default HeroBanner;
