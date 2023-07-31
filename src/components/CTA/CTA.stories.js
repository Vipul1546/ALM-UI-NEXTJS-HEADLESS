import CTA from './CTA';
import styles from './CTA.module.scss';

export default {
  title: 'CTA',
  component: CTA,
};
// use anchor tag
export const AnchorLink = () => (
  <CTA variant={styles.link} href="#">
    Anchor Link
  </CTA>
);

export const AnchorLinkPrimary = () => (
  <CTA href="#" variant={`${styles.button} ${styles.primary}`}>
    Primary
  </CTA>
);

export const AnchorLinkPrimaryOutlined = () => (
  <CTA href="#" variant={`${styles.button} ${styles.primary} ${styles.outlined}`}>
    Primary
  </CTA>
);

export const AnchorLinkPrimaryFullWidth = () => (
  <CTA href="#" variant={`${styles.button} ${styles.primary} ${styles['full-width']}`}>
    Primary
  </CTA>
);

export const AnchorLinkSecondary = () => (
  <CTA href="#" variant={`${styles.button} ${styles.secondary}`}>
    secondary
  </CTA>
);
export const AnchorLinkSuccess = () => (
  <CTA href="#" variant={`${styles.button} ${styles.success}`}>
    success
  </CTA>
);
export const AnchorLinkDanger = () => (
  <CTA href="#" variant={`${styles.button} ${styles.danger}`}>
    danger
  </CTA>
);

// use buttons

export const ButtonPrimary = () => (
  <CTA
    variant={`${styles.button} ${styles.primary}`}
    type="submit"
  >
    Primary
  </CTA>
);

export const ButtonPrimaryOutlined = () => (
  <CTA variant={`${styles.button} ${styles.primary} ${styles.outlined}`}>
    Primary
  </CTA>
);

export const ButtonPrimaryFullWidth = () => (
  <CTA variant={`${styles.button} ${styles.primary} ${styles['full-width']}`}>
    Primary
  </CTA>
);

export const ButtonSecondary = () => (
  <CTA variant={`${styles.button} ${styles.secondary}`}>
    secondary
  </CTA>
);
export const ButtonSuccess = () => (
  <CTA
    variant={`${styles.button} ${styles.success}`}
  >
    success
  </CTA>
);
export const ButtonDanger = () => (
  <CTA variant={`${styles.button} ${styles.danger}`}>
    danger
  </CTA>
);

export const ButtonDangerOutlined = () => (
  <CTA variant={`${styles.button} ${styles.danger} ${styles.outlined}`}>
    danger
  </CTA>
);

export const ButtonDisabled = () => (
  <CTA variant={`${styles.button} ${styles.disabled}`}>
    danger
  </CTA>
);

export const ButtonClose = () => (
  <CTA variant={`${styles.close}`}>
    <span aria-hidden="true">&times;</span>
  </CTA>
);
