import PropTypes from "prop-types";
import styles from "../RecommendedCard.module.scss";

const MetaData = ({ coursePublishDate, courseAuthorName, courseDuration }) => {
    return <div className={styles["course-meta-data"]}>
        <div className={styles["course-publish-date"]}>{coursePublishDate}</div>
        <div className={styles["course-author-name"]}>{courseAuthorName && <div className={styles["filled-oval"]} />}{courseAuthorName}</div>
        <div className={styles["course-duration"]}>
            <span className="sr-only">Duration: 5 minutes</span>
            <span aria-hidden>{courseDuration && <div className={styles["filled-oval"]} />}{courseDuration}</span>
        </div>
    </div>
}

export default MetaData;

MetaData.propTypes = {
    courseDuration: PropTypes.string.isRequired,
    courseAuthorName: PropTypes.string.isRequired,
    coursePublishDate: PropTypes.string.isRequired,
}