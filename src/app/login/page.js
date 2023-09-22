'use client'
import CTA from '@/components/CTA/CTA';
import Heading from '@/components/Heading/Heading';
import Logo from '@/components/Logo/Logo';
import LoginBg from './login-bg-removebg-preview.png';
import styles from './login.module.scss';
const Login = () => {
    return (
        <div className={styles.main}>
            <div className={styles.contentWrap}>
                <img src={LoginBg.src} />
                <div className={styles.actions}>
                    <Logo />
                    <Heading customClass={styles.heading} type="h2" weight="heading-extra-bold">
                        Login with adobe id
                    </Heading>
                    <CTA primary variant="primary">
                        Login
                    </CTA>
                </div>
            </div>
        </div>
    )
}

export default Login