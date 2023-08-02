import Heading from '../Heading/Heading';
import styles from './herobanner.module.scss';

const HeroBanner = () => {
  return (
    <div className={styles.banner}>
      <img src={'https://picsum.photos/1519/600'} alt="" />
      <Heading className={styles.title} type="h1" weight="heading-extra-bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
      </Heading>
    </div>
  );
};

export default HeroBanner;
