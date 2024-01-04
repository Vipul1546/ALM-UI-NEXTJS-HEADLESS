import styles from "../RecommendedCard.module.scss";
import { svgs } from "../svgs";

const CardFooter = ({ showMore, onShowMoreClick }) => {
    return <div className={styles["card-bottom-footer"]}>
        <button className={styles["start-cta"]}>Start</button>
        {showMore ? <p></p> : <button className={styles["show-more-cta"]} aria-label="Check" dangerouslySetInnerHTML={{ __html: svgs.verticalDotsMenu }} onClick={onShowMoreClick}></button>}
    </div>
}

export default CardFooter;

