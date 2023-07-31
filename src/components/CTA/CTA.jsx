import PropTypes from 'prop-types';

const CTA = ({
  tag,
  variant,
  children,
  href,
  type,
  onClick,
}) => {
  let Tag = tag;
  if (href !== '') {
    Tag = 'a';
  } 
  const createCTA = () => (
    <Tag
      className={variant}
      onClick={onClick}
      type={Tag !== 'a' ? type : null}
      href={Tag === 'a' ? href : null}
    >
      {children}
    </Tag>
  );
  return (
    createCTA()
  ); 
};

CTA.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
CTA.defaultProps = {
  tag: 'button',
  href: '',
  type: 'button',
  onClick: () => {},
};
export default CTA;
