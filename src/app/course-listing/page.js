import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getCatalogList, getCoursesList } from '@/services/alm';
import Listing from './Listing';
import styles from './page.module.scss';

const CourseListing = async ({ searchParams }) => {
  const { sort = 'name' } = searchParams;
  const data = await getCatalogList({
    'page[offset]': 0,
    'page[limit]': 10,
    'sort': 'name'
  });
  const courseList = await getCoursesList({
    'page[limit]': 10,
    'filter.loTypes': 'course',
    'filter.catalogIds': 163584,
    sort: decodeURIComponent(sort),
    'filter.ignoreEnhancedLP': true,
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Listing courseList={courseList} />
      </main>
      <Footer />
    </>
  );
};

export default CourseListing;
