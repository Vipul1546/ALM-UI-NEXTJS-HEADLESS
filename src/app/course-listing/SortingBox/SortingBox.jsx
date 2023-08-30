'use client';

import { useSearchParams } from 'next/navigation';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { useAlmContext } from '../../../context/almContext';

const SortingBox = () => {
  const { appliedFilters, updateAppliedFilter } = useAlmContext();
  const searchParams = useSearchParams()
  const sort = searchParams.get('sort') || 'name'

  const handleChange = async e => {
    const { value } = e.target;
    const temp = {...appliedFilters}
    temp.sort = {value}
    updateAppliedFilter({
      ...temp
    })

    return
  };
  return <Dropdown onchange={handleChange} selectedOption={sort}/>;
};

export default SortingBox;
