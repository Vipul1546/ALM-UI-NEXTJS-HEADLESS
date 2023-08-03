import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';

const Card = props => {
  return (
    <div className={`${styles.card} ${styles[props.variant]}`}>
      <Link href={props?.href || '#'}>
      <div className={styles['card-thumb']}>
        {props.category && (
          <div className={styles['card-category']}>
            <span>{props.category}</span>
          </div>
        )}
        <img src={props.imagePath} alt={props.altText} />

        {props.variant == 'tertiary' && <span className={styles['icon-play']}></span>}
      </div>
      <div className={styles['card-content']}>
        {props.variant == 'primary' && (
          <ul className={styles['card-list']}>
            <li>{props.username}</li>
            {props.likes > 1 && <li>{props.likes} </li>}
          </ul>
        )}

        {props.variant == 'secondary' && (
          <>
            <h3>{props.title}</h3>
            <div className={styles['author-box']}>
              <div className={styles['author-image']}>
                <img src={props.authorImg} alt={props.authorAltText} />
              </div>
              <div className={styles['author-info']}>
                <h5>{props.authorName}</h5>
                <p>{props.authorTitle}</p>
                <p>{props.students}</p>
              </div>
            </div>
          </>
        )}

        {props.variant == 'tertiary' && (
          <>
            <ul className={styles['card-list']}>
              <li>{props.students}</li>
              <li>{props.duration}</li>
            </ul>
            <h3>{props.title}</h3>
          </>
        )}

        <div className={styles['card-bottom']}>
          <div className={styles['card-comments']}>
            {props.variant == 'tertiary' && <i className="fas fa-user"></i>}
            {props.variant == 'tertiary' ? props.authorName : props.duration}
          </div>
          <div className={styles['card-like']}>
            <i className={`fas ${props.icon}`}></i>
          </div>
        </div>
      </div>
      </Link>
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
