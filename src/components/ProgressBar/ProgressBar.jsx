import PropTypes from 'prop-types';
import styles from './ProgressBar.module.scss';

const ProgressBar = ({ bgcolor, progress, height, textColor }) => {
  const Parentdiv = {
    height,
  };

  const Childdiv = {
    width: `${progress}%`,
    backgroundColor: bgcolor,
  };

  const progresstext = {
    color: textColor,
  };

  return (
    <div style={Parentdiv} className={styles.progressbar}>
      <div style={Childdiv} className={styles.progress}></div>
      <span style={progresstext} className={styles.progressbar__text}>{`${progress}%`}</span>
    </div>
  );
};

ProgressBar.propTypes = {
  bgcolor: PropTypes.string,
  progress: PropTypes.number,
  height: PropTypes.number,
  textColor: PropTypes.string,
};

ProgressBar.defaultProps = {
  bgcolor: '#99ff66',
  progress: 50,
  height: 30,
  textColor: '#000000',
};

export default ProgressBar;
