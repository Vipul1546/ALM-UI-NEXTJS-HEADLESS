import Link from 'next/link';
import PropTypes from 'prop-types';
import ImageNext from '../Image/ImageNext';
import styles from './Card.module.scss';

const Card = ({
  variant,
  onClick,
  href,
  category,
  imagePath,
  altText,
  username,
  likes,
  title,
  desc,
  authorImg,
  authorAltText,
  authorName,
  authorTitle,
  students,
  duration,
  icon,
  progress,
  style,
}) => {
  let CardTag =
    variant != 'texticon' ? (
      <>
        <div className={styles['card-thumb']}>
          {category && (
            <div className={styles['card-category']}>
              <span>{category}</span>
            </div>
          )}
          {imagePath && <ImageNext imagePath={imagePath} altText={altText} />}

          {variant != 'texticon' && <span className={styles['icon-play']}></span>}
        </div>
        <div className={styles['card-content']}>
          {variant == 'primary' && (
            <ul className={styles['card-list']}>
              <li>{username}</li>
              {likes > 1 && <li>{likes} </li>}
            </ul>
          )}
          {variant == 'in-progress' && <h3>{title}</h3>}
          {variant == 'secondary' && (
            <>
              <h3>{title}</h3>
              <div className={styles['author-box']}>
                <div className={styles['author-image']}>
                  <ImageNext imagePath={authorImg} altText={authorAltText} />
                </div>
                <div className={styles['author-info']}>
                  <h5>{authorName}</h5>
                  <p>{authorTitle}</p>
                  <p>{students}</p>
                </div>
              </div>
            </>
          )}
          {variant == 'tertiary' && (
            <>
              <h3>{title}</h3>
              {desc ? (
                <>
                  <div class={styles['featured-desc']}>
                    <p>{desc}</p>
                  </div>
                  <div class={styles['border-seperator']}></div>
                </>
              ) : (
                <ul className={styles['card-list']}>
                  <li>{students}</li>
                  <li>{duration}</li>
                </ul>
              )}
            </>
          )}
          <div className={styles['card-bottom']}>
            {variant == 'in-progress' && (
              <>
                <div className={styles['card-progress']}>
                  <div className={styles['card-bar']} style={{ width: `${progress}px` }}></div>
                </div>
                <p className={styles['card-percent']}>
                  <span>{progress + '% completed'}</span>
                </p>
              </>
            )}
            {/* <div className={styles['card-comments']}>
              {variant == 'tertiary' && <i className="fas fa-user"></i>}
              {variant == 'tertiary' ? authorName : duration}
            </div> */}
            {desc ? (
              <a class={styles['read-link']} href="#">
                Read More »
              </a>
            ) : (
              <>
                <div className={styles['card-comments']}>
                  {variant == 'tertiary' && <i className="fas fa-user"></i>}
                  {variant == 'tertiary' ? authorName : duration}
                </div>
                <div className={styles['card-like']}>{icon}</div>
              </>
            )}
          </div>
        </div>
      </>
    ) : (
      <>
        <div className={styles['card-icon']}>{icon}</div>
        <div className={styles['card-content']}>
          <h3>{title}</h3>
        </div>
      </>
    );
  return (
    <div className={`${styles.card} ${styles[variant]}`} style={{ ...style }} onClick={onClick}>
      {href ? <Link href={href}> {CardTag} </Link> : CardTag}
    </div>
  );
};

Card.propTypes = {
  variant: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  username: PropTypes.string,
  likes: PropTypes.string,
  comments: PropTypes.string,
};

Card.defaultProps = {
  variant: 'primary',
  imagePath: '',
  altText: '',
  username: '',
  likes: '0',
  comments: '0',
};

export default Card;
