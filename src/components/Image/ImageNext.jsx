import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './ImageNext.module.scss';

const ImageNext = ({
  imagePath, altText, imageClass, caption, href, 
}) => (
  <>
    {href.length > 0 && (
      <a href={href}>
        <Image className={`${styles.image} ${styles[imageClass]}`} src={imagePath} alt={altText} width={500} height={500} />
      </a>
    )}
    {href.length === 0 && (
      <Image className={`${styles.image} ${styles[imageClass]}`} src={imagePath} alt={altText} width={500} height={500} />
    )}
    {caption.length > 0 && <div className={styles['image-caption']}>{caption}</div>}
  </>
);

ImageNext.propTypes = {
  imagePath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  caption: PropTypes.string,
  imageClass: PropTypes.string,
  href: PropTypes.string,
};

ImageNext.defaultProps = {
  caption: '',
  imageClass: '',
  href: '',
};

export default ImageNext;
