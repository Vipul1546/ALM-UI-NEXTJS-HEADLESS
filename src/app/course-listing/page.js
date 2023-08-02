import Chevron from '@/assets/icons/Chevron';
import Card from '@/components/Card/Card';
import Flex from '@/components/Flex/Flex';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import { getCatalogList, getCoursesList } from '@/services/alm';
import Listing from './Listing';
import styles from './page.module.scss';

const Home = async () => {
  const data = await getCatalogList({
    'page[offset]': 0,
    'page[limit]': 10,
    'sort': 'name'
  });
  const courseList = await getCoursesList({
    'page[limit]': 10,
    'filter.loTypes': 'course',
    'filter.catalogIds': 163584,
    sort: 'name',
    'filter.ignoreEnhancedLP': true,
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Flex container justifyContent='flex-start'>
          <SideBar />
          <div className={styles['right-panel']}>
            <Flex container justifyContent='space-between' alignItems='center'>
              <h2>Courses Page</h2>
              <label className={styles.sortBy}>Sort By: <Chevron className={styles.chevron} height={'10px'} width={'10px'} /></label>
            </Flex>
            <Flex container gap='16px' className={styles['list-row']} flexWrap='wrap'>
              {
                courseList?.data?.map((course, idx) => {
                  const bannerImage = course.attributes.imageUrl != undefined ? course.attributes.imageUrl : `https://picsum.photos/350/22${idx}`;
                  const authorName = course.attributes.authorNames != undefined ? course.attributes.authorNames[0] : 'User';

                  return <Card
                    key={idx}
                    variant={'tertiary'}
                    imagePath={bannerImage}
                    altText={'test image'}
                    authorName={authorName}
                    authorTitle={course.attributes.imageUrl}
                    students={`Rs. ${course.attributes.price}`}
                    title={course.attributes.localizedMetadata[0].name}
                    duration={`Duration: ${course.attributes.duration}`}
                    icon={'fa-bookmark'}
                    category={course.attributes.enrollmentType}
                  />

                }
                )
              }
            </Flex>
            <div>
              {
                data?.data?.map((course) => <h2>{course?.attributes?.name}</h2>)
              }
            </div>
            <ul>
              {
                courseList?.data?.map(course => <li>{course?.attributes?.localizedMetadata[0]?.name}</li>)
              }
            </ul>
          </div>
        </Flex>
      </main>
      <Listing courseList={courseList} />
      <Footer />
    </>
  );
};

export default Home;
