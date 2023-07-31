import Flex from '../Flex/Flex';
import Logo from '../Logo/Logo';
import styles from './footer.module.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={styles['footer-main']}>
            <Flex container justifyContent='space-between' alignItems='center'>
                <Logo />
                <span>Copyright © {currentYear} Adobe. All rights reservd</span>
            </Flex>

        </footer>
    )
};

export default Footer;
