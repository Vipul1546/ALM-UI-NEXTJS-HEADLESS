import { useEffect, useState } from 'react';
import IconStar from '../../assets/icons/IconStar';
import CTA from '../CTA/CTA';
import Heading from '../Heading/Heading';
import styles from './course-rating.module.scss';

const CourseRating = ({
  handleSubmit,
  rating = 0,
  starArray = ['none', 'none', 'none', 'none', 'none'],
  submitEnabled = true,
}) => {
  const [starArrayData, setStarArrayData] = useState(starArray || []);
  const [currentRating, setCurrentRating] = useState({
    rating,
    feedbackSubmitted: false,
    ratingChanged: false,
    prevRating: rating,
  });

  useEffect(() => {
    if (rating > 0) {
      handleStarClick(rating - 1);
    }
  }, []);

  useEffect(() => {
    if (rating > 0) {
      handleStarClick(rating - 1);
    }
  }, []);

  const handleStarClick = rate => {
    let newRatingObject = { ...currentRating, rating: rate + 1 };
    let starArray = Array(starArrayData.length).fill('none');

    if (newRatingObject.prevRating != rate + 1) {
      newRatingObject.ratingChanged = true;
    } else {
      newRatingObject.ratingChanged = false;
    }
    setCurrentRating(newRatingObject);

    for (let i = 0; i <= rate; i++) {
      starArray[i] = '#fd60b1';
    }
    setStarArrayData([...starArray]);
  };

  const submitRating = () => {
    if (currentRating.prevRating != currentRating.rating) {
      let newRatingObject = {
        ...currentRating,
        ratingChanged: false,
        feedbackSubmitted: true,
        prevRating: currentRating.rating,
      };
      handleSubmit(currentRating.rating);
      setCurrentRating(newRatingObject);

      setTimeout(() => {
        setCurrentRating({ ...newRatingObject, feedbackSubmitted: false });
      }, 3000);
    }
  };
  return (
    <div className={`${styles['course-rating']} ${submitEnabled ? styles['course-rating__border'] : ''}`}>
      {submitEnabled && (
        <Heading type={'h4'} weight="heading-semi-bold">
          Rate this Course
        </Heading>
      )}
      {!currentRating.feedbackSubmitted && (
        <div className={styles['course-rating-stars']}>
          {starArrayData?.map((star, idx) => {
            return (
              <IconStar
                fillColor={star}
                onClick={() => {
                  handleStarClick(idx);
                }}
                key={idx}
              />
            );
          })}

          {submitEnabled && (
            <CTA
              addOnClass={currentRating.ratingChanged ? 'outlined' : 'disabled'}
              variant="danger"
              type="button"
              onClick={submitRating}>
              Submit
            </CTA>
          )}
        </div>
      )}
      {currentRating.feedbackSubmitted && (
        <div className={styles['course-rating-stars']}>
          <p>Thank you for your feedback!</p>
        </div>
      )}
    </div>
  );
};

export default CourseRating;
