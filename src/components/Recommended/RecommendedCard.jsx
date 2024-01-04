import PropTypes from "prop-types";
import CardFooter from "./CardFooter";
import CardTop from "./CardTop";
import MetaData from "./MetaData";
import Ratings from "./Ratings";
import styles from "./RecommendedCard.module.scss";
import TitleContainer from "./TitleContainer";

const RecommendedCard = ({ courseTitle, courseSkills, courseRecommendationReason, imgSrc, averageRating, ratingsCount, ratedSrOnlyTemplate, notRatedText, notRatedSrOnlyText, courseDuration, courseAuthorName, coursePublishDate }) => {
    return <div className={styles["recommended-card"]}>
        <CardTop imgSrc={imgSrc} />
        <div className={styles["card-bottom"]}>
            <Ratings averageRating={averageRating} ratingsCount={ratingsCount} ratedSrOnlyTemplate={ratedSrOnlyTemplate} notRatedText={notRatedText} notRatedSrOnlyText={notRatedSrOnlyText} />
            <TitleContainer title={courseTitle} />
            <div className={styles["course-skill"]}>{courseSkills}</div>
            <MetaData courseDuration={courseDuration} courseAuthorName={courseAuthorName} coursePublishDate={coursePublishDate} />
            <div className={styles["course-recommendation-reason"]}>{courseRecommendationReason}</div>
            <CardFooter />
        </div>
    </div>
}

export default RecommendedCard;

RecommendedCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    averageRating: PropTypes.number.isRequired,
    ratingsCount: PropTypes.number.isRequired,
    courseTitle: PropTypes.string.isRequired,
    notRatedText: PropTypes.string.isRequired,
    courseSkills: PropTypes.string.isRequired,
    notRatedSrOnlyText: PropTypes.string.isRequired,
    ratedSrOnlyTemplate: PropTypes.string.isRequired,
    courseRecommendationReason: PropTypes.string.isRequired,
    courseDuration: PropTypes.string.isRequired, courseAuthorName: PropTypes.string.isRequired, coursePublishDate: PropTypes.string.isRequired
}