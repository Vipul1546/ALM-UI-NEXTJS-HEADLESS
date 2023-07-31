import Tab from './Tab';
import styles from './Tab.module.scss';

export default {
    title: 'Tab',
    component: Tab,
};

export const Primary = () => <Tab variant={`${styles.primary}`}>Primary</Tab>;
export const Secondary = () => <Tab variant={`${styles.secondary}`}>secondary</Tab>;