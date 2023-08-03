import Link from 'next/link';
import Chevron from '../../assets/icons/Chevron';
import IconBell from '../../assets/icons/IconBell';
import IconSearch from '../../assets/icons/IconSearch';
import IconUser from '../../assets/icons/IconUser';
import Flex from '../Flex/Flex';
import Logo from '../Logo/Logo';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles['main-header']}>
            <Flex container justifyContent='space-between' alignItems='center'>
                <Logo />
                <nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/">My Learning</Link>
                    <Link href="/">Courses</Link>
                    <Link href="/">Find An Instructor</Link>
                </nav>
                <div className={styles.profile}>
                    <Flex gap={'1rem'} container alignItems='center'>
                        <div className={styles['search-group']}>
                            <input type='text' className={styles['form-control']} placeholder='Type Something' />
                            <button className={styles.Iconsearch}><IconSearch /></button>
                        </div>
                        <button className={styles.notification}><IconBell /></button>
                        <button className={styles.user}><IconUser />&nbsp;<Chevron className={styles.chevron} height={'10px'} width={'10px'} /></button>
                    </Flex>
                </div>
            </Flex>
        </header>
    )
};

export default Header;
