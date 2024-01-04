import PropTypes from "prop-types";
import styles from "../RecommendedCard.module.scss";

const NotRated = ({ notRatedText, srOnlyText }) => {
    return <div className={styles['not-rated']}>
        <span aria-hidden>{notRatedText}</span>
        <span className="sr-only">{srOnlyText}</span>
    </div>

}

export default NotRated;

NotRated.propTypes = {
    srOnlyText: PropTypes.string,
    notRatedText: PropTypes.string,
}