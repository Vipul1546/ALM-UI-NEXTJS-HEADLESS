import PropTypes from 'prop-types';
import styles from './CTA.module.scss';

const CTA = ({
  tag = 'button',
  variant = 'primary',
  children,
  href = '',
  type = 'button',
  addOnClass = '',
  onClick = () => {},
}) => {
  const Tag = tag ? tag : 'button';

  const createCTA = () => (
    <Tag
      className={`${styles.button} ${styles[variant]} ${styles[addOnClass] ? styles[addOnClass] : ''}`}
      onClick={onClick}
      type={Tag !== 'a' ? type : null}
      href={Tag === 'a' ? href : null}>
      {children}
    </Tag>
  );
  return createCTA();
};

CTA.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string.isRequired,
  addOnClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
export default CTA;
