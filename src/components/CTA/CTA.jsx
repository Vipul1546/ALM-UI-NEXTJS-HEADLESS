import PropTypes from 'prop-types';
import styles from './CTA.module.scss';

const CTA = ({ variant, children, href, type, addOnClass, onClick }) => {
  let Tag = 'button';
  if (href !== '') {
    Tag = 'a';
  }
  console.log(variant);
  const createCTA = () => (
    <Tag
      className={`${styles.button} ${styles[variant]} ${styles[addOnClass]}`}
      onClick={onClick}
      type={Tag !== 'a' ? type : null}
      href={Tag === 'a' ? href : null}>
      {children}
    </Tag>
  );
  return createCTA();
};

CTA.propTypes = {
  variant: PropTypes.string.isRequired,
  addOnClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
CTA.defaultProps = {
  href: '',
  type: 'button',
  onClick: () => {},
  addOnClass: '',
};
export default CTA;
