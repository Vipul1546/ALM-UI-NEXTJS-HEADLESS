import { useAlmContext } from '@/context';
import Checkbox from '../Checkbox';
import styles from './sidebar.module.scss';
const Filters = ({ filter }) => {
  const { appliedFilters, updateAppliedFilter } = useAlmContext();

  const isChecked = (option, filterName) => {
    const { filters } = appliedFilters;
    if (Object.keys(filters).length <= 0) return false;
    return filters[filterName]?.includes(option);
  };

  const selectHandler = (e, value, filterName) => {
    const obj = { ...appliedFilters.filters };
    if (e.target.checked)
      typeof obj[filterName] === 'undefined' ? (obj[filterName] = [value]) : obj[filterName].push(value);
    else {
      obj[filterName] = obj[filterName].filter(i => i !== value);
      if (obj[filterName].length <= 0) delete obj[filterName];
    }
    updateAppliedFilter({
      ...appliedFilters,
      filters: { ...obj },
    });
  };

  return (
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
  );
};

export default Filters;
