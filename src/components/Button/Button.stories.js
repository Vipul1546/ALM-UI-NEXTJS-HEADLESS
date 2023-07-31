import Button from './Button';
import styles from './Button.module.scss';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button variant={`${styles.primary}`}>Primary</Button>;
export const Secondary = () => <Button variant={`${styles.secondary}`}>secondary</Button>;
export const Success = () => <Button variant={`${styles.success}`}>success</Button>;
export const Danger = () => <Button variant={`${styles.danger}`}>danger</Button>;
