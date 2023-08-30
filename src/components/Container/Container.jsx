import PropTypes from 'prop-types';
import style from './Container.module.scss';

const Container = ({ children, variant, maxWidth }) => (
  <div
    className={`${style.container} ${style[variant] ? style[variant] : ''}`}
    style={maxWidth ? { 'max-width': maxWidth } : {}}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  maxWidth: PropTypes.string,
};

Container.defaultProps = {
  variant: 'container-block',
  maxWidth: '',
};

export default Container;
