'use client'
import IconHamburger from '@/assets/icons/IconHamburger';
import Container from '@/components/Container/Container';
import { useAlmContext } from '@/context';
import { useAuth } from "@/context/authContext";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import useWindowSize from "../../utils/customhooks/useWindowSize";
import Flex from '../Flex/Flex';
import Logo from '../Logo/Logo';
import Search from '../Search';
import styles from './header.module.scss';

const Header = () => {
    const { updateIsWhiteLogo } = useAlmContext()
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    const [themeDropDown, setThemeDropDown] = useState(false);
    const { width, height } = useWindowSize();
    const { isAuthenticated, user, login, loading, logout } = useAuth()
    const isHeaderSecondary = usePathname() !== '/' ? 'secondary' : "";
    const isMobile = width < 768;
    const name = user?.data?.attributes?.name;
    const themesForWhiteLogo = ['dark-theme', 'secondary-theme'];

    const logInOutHandler = () => {
        if (user) logout()
        else router.push('/login')
    }
    const themeHandler = (theme)=>{
        const body = document.body;
        if(themesForWhiteLogo.indexOf(theme)>-1){
            updateIsWhiteLogo(true);
        }else{
            updateIsWhiteLogo(false);
        }

        if (body.classList) {
            let classesToRemove = [];
            body.classList.forEach(function(className) {
                if (className.indexOf('theme') !== -1) {
                    classesToRemove.push(className);
                }
            });
            classesToRemove.forEach(function(className) {
                body.classList.remove(className);
            });
        }
        body.classList.add(theme);
    }

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
                        <Link href="/" className={usePathname() === '/catalogs' ? styles.active : ''}>Catalogs</Link>
                        <Link href="/" className={usePathname() === '/contact-us' ? styles.active : ''}>Contact Us</Link>
                    </nav>
                        {!isMobile && <div className={styles.profile}>
                            <Flex gap={'1rem'} container alignItems='center'>
                                <Search />
                                {/* <button className={styles.notification}><IconBell /></button> */}
                                {user ? <div className={styles.user} onClick={() => {setThemeDropDown(false);setDropDown(!dropDown);}}><button>
                                    <span className={styles.name}>Hi, {name}</span><i className="fa fa-user" aria-hidden="true"></i>
                                    <i className={`fa fa-chevron-down ${styles.chevron + " " + (dropDown ? styles.rotate : '')}`} aria-hidden="true"></i>
                                </button>
                                    {dropDown && (<ul className={styles.dd}>
                                        <li><Link href="/my-learning">My Learning</Link></li>
                                        <li onClick={logInOutHandler}>Logout</li>
                                    </ul>)}

                                </div> : <button className={styles.notification} onClick={logInOutHandler}>{'Login'}</button>}

                                <div className={styles.user} onClick={() => {setThemeDropDown(!themeDropDown);setDropDown(false);}}><button>
                                <span className={styles.name}></span><i className="fa fa-wrench" aria-hidden="true"></i><i className={`fa fa-chevron-down ${styles.chevron + " " + (dropDown ? styles.rotate : '')}`} aria-hidden="true"></i>
                                </button>
                                    {themeDropDown && (<ul className={`${styles.dd} ${styles['theme-dd']}`}>
                                        <li onClick={() => themeHandler('primary-theme')}>Primary</li>
                                        <li onClick={() => themeHandler('secondary-theme')}>Secondary</li>
                                        <li onClick={() => themeHandler('dark-theme')}>Dark</li>
                                        <li onClick={() => themeHandler('light-theme')}>Light</li>
                                        <li onClick={() => themeHandler('default-theme')}>Default</li>
                                    </ul>)}

                                </div>
                            </Flex>
                        </div>}
                    </>}

                </Flex>
            </Container>
        </header >
    )
};

export default Header;
