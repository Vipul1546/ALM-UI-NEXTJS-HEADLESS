import styles from './Loader.module.scss';

const ComponentLoader = ({ text = 'Loading' }) => {

    return (<div className={styles['is-loading']}>
        <p></p>
    </div>)
}

export default ComponentLoader