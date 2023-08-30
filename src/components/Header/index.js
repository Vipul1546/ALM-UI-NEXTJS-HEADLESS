'use client'
import IconHamburger from '@/assets/icons/IconHamburger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Chevron from '../../assets/icons/Chevron';
import IconBell from '../../assets/icons/IconBell';
import IconSearch from '../../assets/icons/IconSearch';
import IconUser from '../../assets/icons/IconUser';
import useWindowSize from "../../utils/customhooks/useWindowSize";
import Flex from '../Flex/Flex';
import Logo from '../Logo/Logo';
import styles from './header.module.scss';
const Header = () => {
    const [open, setOpen] = useState(false);
    const { width, height } = useWindowSize();
    const isHeaderSecondary = usePathname() !== '/' ? 'secondary' : "";
    const isMobile = width < 768;

    return (
        <header className={`${styles['main-header']} ${styles[isHeaderSecondary]}`}>
            <Flex container justifyContent='space-between' alignItems='center' className={styles.flexWrapper}>
                <Logo />
                {isMobile && <div className={styles.hamburger} onClick={() => setOpen(!open)}><IconHamburger /></div>}
                {isMobile && !open ? '' : <><nav className={styles.nav}>
                    <Link href="/">Home</Link>
                    <Link href="/">My Learning</Link>
                    <Link href="/course-listing">Courses</Link>
                    <Link href="/">Find An Instructor</Link>
                </nav>
                    {!isMobile && <div className={styles.profile}>
                        <Flex gap={'1rem'} container alignItems='center'>
                            <div className={styles['search-group']}>
                                <input type='text' className={styles['form-control']} placeholder='Type Something' />
                                <button className={styles.Iconsearch}><IconSearch /></button>
                            </div>
                            <button className={styles.notification}><IconBell /></button>
                            <button className={styles.user}><IconUser />&nbsp;<Chevron className={styles.chevron} height={'10px'} width={'10px'} /></button>
                        </Flex>
                    </div>}
                </>}

            </Flex>
        </header >
    )
};

export default Header;
