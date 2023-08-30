import PropTypes from 'prop-types';
import styles from './Heading.module.scss';

const Heading = ({ type = 'h1', weight = 'heading-bold', children, customClass }) => {
  const Tag = type;
  return <Tag className={`${styles[weight]} ${customClass}`}>{children}</Tag>;
};

Heading.propTypes = {
  type: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Heading;
