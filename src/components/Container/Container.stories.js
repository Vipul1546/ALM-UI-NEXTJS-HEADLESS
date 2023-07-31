import Container from './Container';
import styles from './Container.module.scss';

export default {
  title: 'Container',
  component: Container,
};

export const Containerblock = () => (
  <Container variant={styles.flex} width="90%" background="#666666">
    Container Test
  </Container>
);

export const ContainerFlex = () => (
  <Container variant={styles.flex} width="80%" background="red">
    Container Test
  </Container>
);

export const ContainerExample = () => (
  <Container variant={styles.flex} width="80%" background="red">
    Main container
    <Container width="50%" background="blue">
      child container
    </Container>
    <Container width="50%" background="purple">
      child container
    </Container>
  </Container>
);
