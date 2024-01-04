import PropTypes from "prop-types";
import styles from "../RecommendedCard.module.scss";
import NotRated from "./NotRated";
import Rated from "./Rated";

const Ratings = ({ notRatedText = '', notRatedSrOnlyText = '', ratings = 0, ratedSrOnlyTemplate = '', usersRated = 0 }) => {
    console.log({ notRatedText, notRatedSrOnlyText, ratings, ratedSrOnlyTemplate, usersRated })
    const rated = usersRated && usersRated > 0;
    return <div className={styles["course-rating-container"]}>
        {rated ? <Rated ratings={ratings} srOnlyTemplate={ratedSrOnlyTemplate} usersRated={usersRated} /> : <NotRated notRatedText={notRatedText} srOnlyText={notRatedSrOnlyText} />}
    </div>
}

export default Ratings;

Ratings.defaultProps = {
    ratings: 0,
    usersRated: 0,
    notRatedText: '',
    notRatedSrOnlyText: "",
    ratedSrOnlyTemplate: ''
}

Ratings.propTypes = {
    ratings: PropTypes.number,
    usersRated: PropTypes.number,
    notRatedText: PropTypes.string,
    notRatedSrOnlyText: PropTypes.string,
    ratedSrOnlyTemplate: PropTypes.string
}