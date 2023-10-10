import Link from 'next/link';
import LoginContainer from './LoginContainer';
import LoginBg from './login-bg-removebg-preview.jpeg';
import styles from './login.module.scss';
const Login = () => {
    return (
        <div className={styles.main} style={{ backgroundImage: `url(${LoginBg.src})` }}>
            <div className={styles.contentWrap}>
                <div className={styles.actions}>
                    <LoginContainer />
                </div>

                <label>Back to home page <Link href={'/'}>Click Here</Link></label>
            </div>
        </div>
    )
}

export default Login