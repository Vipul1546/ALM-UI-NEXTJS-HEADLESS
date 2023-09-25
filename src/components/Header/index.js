'use client'
import IconHamburger from '@/assets/icons/IconHamburger';
import Container from '@/components/Container/Container';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Chevron from '../../assets/icons/Chevron';
import IconBell from '../../assets/icons/IconBell';
import IconUser from '../../assets/icons/IconUser';
import useWindowSize from "../../utils/customhooks/useWindowSize";
import Flex from '../Flex/Flex';
import Logo from '../Logo/Logo';
import styles from './header.module.scss';

import Search from '../Search';

const Header = () => {
    const [open, setOpen] = useState(false);
    const { width, height } = useWindowSize();
    const isHeaderSecondary = usePathname() !== '/' ? 'secondary' : "";
    const isMobile = width < 768;

    return (
        <header className={`${styles['main-header']} ${styles[isHeaderSecondary]}`}>
            <Container>
                <Flex container justifyContent='space-between' alignItems='center' className={styles.flexWrapper}>
                    <Logo />
                    {isMobile && <div className={styles.hamburger} onClick={() => setOpen(!open)}><IconHamburger /></div>}
                    {isMobile && !open ? '' : <><nav className={styles.nav}>
                        <Link href="/">Home</Link>
                        <Link href="/my-learning" className={usePathname() === '/my-learning' ? styles.active : ''}>My Learning</Link>
                        <Link href="/course-listing" className={usePathname() === '/course-listing' ? styles.active : ''}>Courses</Link>
                        <Link href="/">Find An Instructor</Link>
                    </nav>
                        {!isMobile && <div className={styles.profile}>
                            <Flex gap={'1rem'} container alignItems='center'>
                                <Search />
                                <button className={styles.notification}><IconBell /></button>
                                <button className={styles.user}><IconUser />&nbsp;<Chevron className={styles.chevron} height={'10px'} width={'10px'} /></button>
                            </Flex>
                        </div>}
                    </>}

                </Flex>
            </Container>
        </header >
    )
};

export default Header;
