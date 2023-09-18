import Container from '../Container/Container';
import Flex from '../Flex/Flex';
import Logo from '../Logo/Logo';
import styles from './footer.module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles['footer-main']}>
            <Container>
                <Flex container justifyContent='space-between' alignItems='center' className={styles.flexWrapper}>
                    <Logo />
                    <span>Copyright © {currentYear} Adobe. All rights reservd</span>
                </Flex>
            </Container>
        </footer>
    )
};

export default Footer;
