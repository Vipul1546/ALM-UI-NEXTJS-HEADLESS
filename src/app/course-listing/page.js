import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FILTERS } from '@/constants/almConstant';
import { getCatalogList, getCoursesList, getskills } from '@/services/alm';
import Listing from './Listing';
import styles from './page.module.scss';

const CourseListing = async ({ searchParams }) => {
  const { sort = 'name', Skills = '' } = searchParams;
  const skillFilter = Skills && decodeURIComponent(Skills).split(',')
  const { TYPES } = FILTERS

  const data = await getCatalogList({
    'page[offset]': 0,
    'page[limit]': 10,
    'sort': 'name'
  });

  const courseList = await getCoursesList({
    'page[limit]': 24,
    'filter.loTypes': 'course',
    'filter.catalogIds': 167871,
    'filter.skillName': [...skillFilter],
    sort: decodeURIComponent(sort),
    'filter.ignoreEnhancedLP': true,
  });

  const skills = await getskills('')
  const FilterList = [
    {
      name: 'skills',
      data: [...skills?.data],
    },
    {
      name: 'types',
      data: [...TYPES],
    },
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Listing courseList={courseList} FilterList={FilterList} isServer={true} />
      </main>
      <Footer />
    </>
  );
};

export default CourseListing;
