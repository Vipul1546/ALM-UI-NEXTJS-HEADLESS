import PropTypes from "prop-types";
import styles from "../RecommendedCard.module.scss";

const CardTop = ({ imgSrc }) => {
    return <button style={{ backgroundImage: `url(${imgSrc})` }} tabIndex="-1" aria-hidden="true" className={styles["card-top"]} />
}

export default CardTop

CardTop.propTypes = {
    imgSrc: PropTypes.string.isRequired
}