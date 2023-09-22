import Container from '../Container/Container';
import Flex from '../Flex/Flex';
import Heading from '../Heading/Heading';
import bannerImage from './banner-image-removebg-preview.png';
import styles from './herobanner.module.scss';

const HeroBanner = () => {
  return (
    <div className={styles.banner}>
      <Container variant={styles.flex}>
        <Flex
          container
          justifyContent="space-between"
          alignItems="flex-end"
          height="100%"
          className={styles.flexWrpper}>
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
          <img src={bannerImage.src} alt="" />
        </Flex>
      </Container>
    </div>
  );
};

export default HeroBanner;
