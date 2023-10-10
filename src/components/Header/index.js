'use client'
import IconHamburger from '@/assets/icons/IconHamburger';
import Container from '@/components/Container/Container';
import { useAuth } from "@/context/authContext";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import Chevron from '../../assets/icons/Chevron';
import IconUser from '../../assets/icons/IconUser';
import useWindowSize from "../../utils/customhooks/useWindowSize";
import Flex from '../Flex/Flex';
import Logo from '../Logo/Logo';
import Search from '../Search';
import styles from './header.module.scss';

const Header = () => {
    const contentRef = useRef();
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const { width, height } = useWindowSize();
    const { isAuthenticated, user, login, loading, logout } = useAuth()
    const isHeaderSecondary = usePathname() !== '/' ? 'secondary' : "";
    const isMobile = width < 768;
    const name = user?.data?.attributes?.name

    const logInOutHandler = () => {
        if (user) logout()
        else router.push('/login')
    }
    console.log('contentRef', contentRef)
    return (
        <header className={`${styles['main-header']} ${styles[isHeaderSecondary]}`}>
            <Container>
                <Flex container justifyContent='space-between' alignItems='center' className={styles.flexWrapper}>
                    <Logo />
                    {isMobile && <>{user && <span className={styles.name}>Hi, {name}</span>}<div className={styles.hamburger} onClick={() => setOpen(!open)}><IconHamburger /></div></>}
                    {isMobile && !open ? '' : <><nav className={styles.nav}>
                        <Link href="/">Home</Link>
                        {
                            user && <Link href="/my-learning" className={usePathname() === '/my-learning' ? styles.active : ''}>My Learning</Link>
                        }
                        <Link href="/course-listing" className={usePathname() === '/course-listing' ? styles.active : ''}>Courses</Link>
                        {isMobile && <div onClick={logInOutHandler}>{user ? 'Logout' : 'Login'}</div>}
                        <Link href="/" className={usePathname() === '/course-listing' ? styles.active : ''}>Catalogs</Link>
                        <Link href="/" className={usePathname() === '/about-us' ? styles.active : ''}>About Us</Link>
                        <Link href="/" className={usePathname() === '/contact-us' ? styles.active : ''}>Contact Us</Link>
                    </nav>
                        {!isMobile && <div className={styles.profile}>
                            <Flex gap={'1rem'} container alignItems='center'>
                                <Search />
                                {/* <button className={styles.notification}><IconBell /></button> */}
                                {user ? <div className={styles.user} onClick={() => setDropDown(!dropDown)}><button>
                                    <span className={styles.name}>Hi, {name}</span><IconUser /><Chevron className={styles.chevron + " " + (dropDown ? styles.rotate : '')} height={'10px'} width={'10px'} />
                                </button>
                                    {dropDown && (<ul ref={contentRef} className={styles.dd}>
                                        <li><Link href="/my-learning">My Learning</Link></li>
                                        <li onClick={logInOutHandler}>Logout</li>
                                    </ul>)}

                                </div> : <button className={styles.notification} onClick={logInOutHandler}>{'Login'}</button>}
                            </Flex>
                        </div>}
                    </>}

                </Flex>
            </Container>
        </header >
    )
};

export default Header;
