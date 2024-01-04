import Image from 'next/image';
import styles from './Loader.module.scss';

const Loader = ({ text }) => {

    return (<div className={styles['loading']}>
        <div className={styles['loading-text']}>
            <Image src="/logo/Wonder_white.png"
                width={50}
                height={50}
                alt="Logo" />
            {
                text.split('').map(t => <span className={styles['loading-text-words']}>{t}</span>)
            }
        </div>
    </div>)
}

export default Loader