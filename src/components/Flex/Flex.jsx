import PropTypes from 'prop-types';
const Flex = props => {
  return (
    <div
      className={props.className}
      style={{
        display: props.container ? 'flex' : 'block',
        justifyContent: props.justifyContent || 'flex-start',
        flexDirection: props.flexDirection || 'row',
        gap: props.gap || '0',
        flexGrow: props.flexGrow || 0,
        flexBasis: props.flexBasis || 'auto',
        flexShrink: props.flexShrink || 1,
        flexWrap: props.flexWrap || 'nowrap',
        flex: props.flex || '0 1 auto',
        alignItems: props.alignItems || 'stretch',
        margin: props.margin || '0',
        padding: props.padding || '0',
        width: props.width || 'auto',
        height: props.height || 'auto',
        maxWidth: props.maxWidth || 'none',
      }}>
      {props.children}
    </div>
  );
};

Flex.propTypes = {
  className: PropTypes.string,
  display: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  flexGrow: PropTypes.string,
  flexBasis: PropTypes.string,
  flexShrink: PropTypes.string,
  flexWrap: PropTypes.string,
  flex: PropTypes.string,
  alignItems: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  maxWidth: PropTypes.string,
};

export default Flex;
