import Checkbox from '../Checkbox';
import Flex from '../Flex/Flex';
import styles from './sidebar.module.scss';
const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <Flex container justifyContent="space-between" alignItems="center">
        <h3>Filter By</h3>
        <a className={styles.link} variant={'link'} href="#">
          Reset
        </a>
      </Flex>
      <div className={styles['filter-group']}>
        <h5>Dx Enablement Catalogs</h5>
        <ul>
          {Array(5)
            .fill()
            .map((_, idx) => (
              <li key={`item_${idx}`}>
                <Checkbox label={`item ${idx}`} id={`item_${idx}`} />
              </li>
            ))}
        </ul>
      </div>
      <div className={styles['filter-group']}>
        <h5>Other Catalogs</h5>
        <ul>
          {Array(4)
            .fill()
            .map((_, idx) => (
              <li key={`item_${idx}`}>
                <Checkbox label={`item ${idx}`} id={`item_${idx}`} />
              </li>
            ))}
        </ul>
      </div>
      <div className={styles['filter-group']}>
        <h5>Type</h5>
        <ul>
          {Array(3)
            .fill()
            .map((_, idx) => (
              <li key={`item_${idx}`}>
                <Checkbox label={`item ${idx}`} id={`item_${idx}`} />
              </li>
            ))}
        </ul>
      </div>
      <div className={styles['filter-group']}>
        <h5>Format</h5>
        <ul>
          {Array(4)
            .fill()
            .map((_, idx) => (
              <li key={`item_${idx}`}>
                <Checkbox label={`item ${idx}`} id={`item_${idx}`} />
              </li>
            ))}
        </ul>
      </div>
      <div className={styles['filter-group']}>
        <h5>Skills</h5>
        <ul>
          {Array(3)
            .fill()
            .map((_, idx) => (
              <li key={`item_${idx}`}>
                <Checkbox label={`item ${idx}`} id={`item_${idx}`} />
              </li>
            ))}
        </ul>
      </div>
      <div className={styles['filter-group']}>
        <h5>Skill Level</h5>
        <ul>
          {Array(5)
            .fill()
            .map((_, idx) => (
              <li key={`item_${idx}`}>
                <Checkbox label={`item ${idx}`} id={`item_${idx}`} />
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
