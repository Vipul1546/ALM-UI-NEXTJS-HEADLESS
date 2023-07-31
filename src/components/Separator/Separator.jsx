import PropTypes from 'prop-types';

const Separator = ({
  height, separatorColor, marginTop, marginBottom, 
}) => {
  const HorizontalRule = {
    height,
    backgroundColor: separatorColor,
    marginTop,
    marginBottom,
  };

  return (
    <div className="separator">
      <hr style={HorizontalRule} className="separator__horizontal" />
    </div>
  );
};

Separator.propTypes = {
  height: PropTypes.number,
  separatorColor: PropTypes.string,
  marginBottom: PropTypes.number,
  marginTop: PropTypes.number,
};

Separator.defaultProps = {
  height: 1,
  separatorColor: '#000000',
  marginBottom: 16,
  marginTop: 16,
};

export default Separator;
