import { useAlmContext } from '@/context/almContext';
import CTA from '../CTA/CTA';
import Checkbox from '../Checkbox';
import Flex from '../Flex/Flex';
import styles from './sidebar.module.scss';

const SideBar = ({ setFilterOpen, isMobile }) => {
  const { filters, appliedFilters, updateAppliedFilter } = useAlmContext();

  const selectHandler = (e, value, filterName) => {
    const obj = { ...appliedFilters.filters };
    if (e.target.checked)
      typeof obj[filterName] === 'undefined' ? (obj[filterName] = [value]) : obj[filterName].push(value);
    else obj[filterName] = obj[filterName].filter(i => i !== value);
    updateAppliedFilter({
      ...appliedFilters,
      filters: { ...obj },
    });
  };

  const isChecked = (option, filterName) => {
    const { filters } = appliedFilters;
    if (Object.keys(filters).length <= 0) return false;
    return filters[filterName]?.includes(option);
  };

  return (
    <aside className={styles.sidebar}>
      <Flex container justifyContent="space-between" alignItems="center">
        <h3>Filter By</h3>
        <a className={styles.link} variant={'link'} href="#">
          Reset
        </a>
      </Flex>
      {filters &&
        filters.map(filter => (
          <div className={styles['filter-group']}>
            <h5>{filter?.name}</h5>
            <ul>
              {filter?.data?.map((_, idx) => (
                <li key={`item_${_.id}`}>
                  <Checkbox
                    label={_?.attributes?.name}
                    id={`item_${_.id}`}
                    checked={isChecked(_?.attributes?.name, filter?.name)}
                    checkHandler={e => selectHandler(e, _?.attributes?.name, filter?.name)}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      {isMobile && (
        <CTA primary variant="primary" onClick={() => setFilterOpen(false)}>
          Apply
        </CTA>
      )}
    </aside>
  );
};

export default SideBar;
