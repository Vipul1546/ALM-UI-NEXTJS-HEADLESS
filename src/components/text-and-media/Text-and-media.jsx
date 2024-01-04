import Heading from '../Heading/Heading';
import ImageNext from '../Image/ImageNext';
import styles from './Text-and-media.module.scss';

const TextAndMedia = ({title="", subtitle="", text="", imagePath="#" }) => {

    return (<div className={styles['text-and-media']}>
          <div className={styles['text-and-media-container']}>
            <div className={styles['row']}>
              <div className={styles['text-section']}>
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
                  {title}
              </Heading>
              <Heading customClass={styles['section-heading']} type="h4" weight="heading-semi-bold">
                 {subtitle}
              </Heading>
              <div className={styles['text-section-description']}>
                  {text}
              </div>
              </div>
              <div className={styles['media-section']}>
                <ImageNext imagePath={imagePath} imageClass="image-height-100" altText="image" />
              </div>
            </div>
          </div>
      </div>)
}

export default TextAndMedia;