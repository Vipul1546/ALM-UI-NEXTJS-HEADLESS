import Link from 'next/link';
import LoginContainer from './LoginContainer';
import styles from './login.module.scss';
const Login = () => {
    return (
        <div className={styles.main} style={{ backgroundImage: `url(/login_bg_alm.jpg)` }}>
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