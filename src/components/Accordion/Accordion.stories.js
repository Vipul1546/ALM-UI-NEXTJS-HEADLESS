import Accordion from './Accordion';
import styles from './Accordion.module.scss';

export default {
    title: 'Accordion',
    component: Accordion,
};

export const Primary = () => <Accordion variant={`${styles.primary}`}>Primary</Accordion>;
export const Secondary = () => <Accordion variant={`${styles.secondary}`} iconType={'plus'}>Secondary</Accordion>;
export const HoverImage = () => <Accordion variant={`${styles['hover-image']}`}>HoverImage</Accordion>;
