'use client';

import { getCoursesList } from '@/services/alm';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { useAlmContext } from '../../../context/almContext';

const SortingBox = ({ courseList, fetchState }) => {
  const { courseListing, updateCourseListing } = useAlmContext();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  // Create inline loading UI
  const isMutating = isFetching || isPending;

  useEffect(() => {
    updateCourseListing({ ...courseList });
  }, []);

  const handleChange = async e => {
    const { name, value } = e.target;
    setIsFetching(true);
    fetchState(true);
    const courseList = await getCoursesList({
      'page[limit]': 10,
      'filter.loTypes': 'course',
      'filter.catalogIds': 163584,
      sort: value,
      'filter.ignoreEnhancedLP': true,
    });
    updateCourseListing({ ...courseList });
    setIsFetching(false);
    fetchState(false);
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      const newUrlParams = new URLSearchParams(searchParams.toString());
      newUrlParams.set('sort', value);
      router.push(`${pathname}?${newUrlParams}`);
    });
  };
  return <Dropdown onchange={handleChange} />;
};

export default SortingBox;
