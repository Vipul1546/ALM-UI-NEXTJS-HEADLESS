import PropTypes from "prop-types";
import styles from "../RecommendedCard.module.scss";
import { svgs } from "../svgs";
import { getRatingsSrOnlyText } from "../utils";

const Rated = ({ ratings = 0, srOnlyTemplate = '', usersRated = 0 }) => {
    const ratingStars = [1, 2, 3, 4, 5];
    const ratingsSrOnlyText = getRatingsSrOnlyText(srOnlyTemplate, ratings, usersRated);

    return <div className={styles["course-rating"]}>
        <div className="sr-only">{ratingsSrOnlyText}</div>
        <div className={styles['ratings']}>
            {ratingStars.map((num, index) => <div key={num} className={styles['rating']} dangerouslySetInnerHTML={{ __html: index < ratings ? svgs.filledStar : svgs.emptyStar }} />)}
            <div className={styles['rating-count']}>{usersRated}</div>
        </div>
    </div>
}

export default Rated;

Rated.propTypes = {
    ratings: PropTypes.number,
    usersRated: PropTypes.number,
    srOnlyTemplate: PropTypes.string
}