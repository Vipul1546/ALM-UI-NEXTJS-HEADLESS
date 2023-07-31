import PropTypes from 'prop-types';
import style from './Container.module.scss';

const Container = ({
  children, width, height, variant, background, 
}) => (
  <div className={`${style.container} ${variant}`} style={{ width, background, height }}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  variant: PropTypes.string,
  background: PropTypes.string,
};

Container.defaultProps = {
  width: '100%',
  height: '100%',
  variant: 'container-block',
  background: '#ffffff',
};

export default Container;
