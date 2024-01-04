import PropTypes from "prop-types";
import styles from "../RecommendedCard.module.scss";

const TitleContainer = ({ title }) => {
    return <div className={styles["course-title-container"]}>
        <a className={styles["course-title"]} href="#abcdef">{title}</a>
        <div className={styles["enrollment-cta-container"]}></div>
    </div>
}

export default TitleContainer;

TitleContainer.propTypes = {
    title: PropTypes.string.isRequired
}