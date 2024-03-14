import { useAlmContext } from '@/context/almContext';
import CTA from '../CTA/CTA';
import Flex from '../Flex/Flex';
import Filters from './filters';
import styles from './sidebar.module.scss';

const SideBar = ({ setFilterOpen, isMobile }) => {
  const { filters, appliedFilters, updateAppliedFilter } = useAlmContext();

  const resetHandler = e => {
    e.preventDefault();
    updateAppliedFilter({
      ...appliedFilters,
      filters: {},
    });
  };

  return (
    <aside className={styles.sidebar}>
      <Flex container justifyContent="space-between" alignItems="center">
        <h3>Filter By</h3>
        <a className={styles.link} variant={'link'} href="#" onClick={resetHandler.bind(this)}>
          Reset
        </a>
      </Flex>
      {filters && filters.map((filter, idx) => <Filters filter={filter} key={`filter_${idx}`} />)}
      {isMobile && (
        <CTA primary variant="primary" onClick={() => setFilterOpen(false)}>
          Apply
        </CTA>
      )}
    </aside>
  );
};

export default SideBar;
