'use client';
import IconUser from '@/assets/icons/IconUser';
import Card from '@/components/Card/Card';
import Carousel from '@/components/Carousel/Carousel';
import Container from '@/components/Container/Container';
import Flex from '@/components/Flex/Flex';
import Heading from '@/components/Heading/Heading';
import RecommendedCard from '@/components/Recommended/RecommendedCard';
import SideBar from '@/components/SideBar';
import { getDuration } from '@/helper';
import { getRecommendations } from '@/services/alm';
import { useEffect, useState } from 'react';
import useWindowSize from '../../../utils/customhooks/useWindowSize';
import styles from '../mylearning.module.scss';
import { prepRecommendedCardData } from './helper';

const MyLearningComp = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [recommendations, setRecommendations] = useState(null);
  const { width, height } = useWindowSize();
  const isMobile = width < 768;
  const lastPrevCarousel = {
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getRecommendations().then(results => {
      if (results) {
        const formattedResults = prepRecommendedCardData(results);
        console.log("results 2 :: ", formattedResults);
        setRecommendations(formattedResults);
      }
    })
  }, []);

  return (
    <main className={styles.main}>
      <Container>
        <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
          Resume Last Courses
        </Heading>
        <Flex container justifyContent="flex-start">
          <div>
            {isMobile && !filterOpen ? (
              <div onClick={() => setFilterOpen(!filterOpen)} className={styles['btn-float']}>
                <i class="fa-solid fa-filter"></i>
              </div>
            ) : isMobile && filterOpen ? (
              <SideBar setFilterOpen={setFilterOpen} isMobile />
            ) : (
              <SideBar setFilterOpen={setFilterOpen} />
            )}
          </div>
          <div className={styles['right-panel']}>
            <div className={styles.category}>
              <Carousel settings={lastPrevCarousel}>
                {Array(6)
                  .fill()
                  .map((_, idx) => {
                    return (
                      <Card
                        key={idx}
                        variant={'in-progress'}
                        imagePath={`https://picsum.photos/350/22${idx}`}
                        altText={'test image'}
                        title={'React Native Recommended Courses'}
                        duration={`Total: ${getDuration(200 * idx)}`}
                        progress={idx * 15}
                      />
                    );
                  })}
              </Carousel>
            </div>
            <div className={styles.category}>
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
                Enrolled Courses
              </Heading>
              <Carousel settings={lastPrevCarousel}>
                {Array(6)
                  .fill()
                  .map((_, idx) => {
                    return (
                      <Card
                        key={idx}
                        variant={'tertiary'}
                        imagePath={`https://picsum.photos/350/22${idx}`}
                        altText={'test image'}
                        authorName={'John Doe'}
                        authorTitle={'React Native'}
                        students={`Rs. 1400`}
                        title={'React Native Recommended Courses'}
                        duration={`Total: ${getDuration(100 * idx)}`}
                        icon={<IconUser />}
                        category={'some type'}
                      />
                    );
                  })}
              </Carousel>
            </div>
            <div className={styles.category}>
              <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">
                Recommended Courses
              </Heading>
              {recommendations ?
                Object.keys(recommendations).map((type) => <Carousel key={type} settings={lastPrevCarousel}>
                  {recommendations[type].map((course, idx) => {
                    return (
                      <RecommendedCard
                        key={course.id}
                        imgSrc={course.imgSrc}
                        altText={'test image'}
                        variant={'recommendation'}
                        courseDuration={course.duration}
                        courseAuthorName={course.authors}
                        ratingsCount={course.ratingsCount}
                        averageRatings={course.averageRatings}
                        coursePublishDate={course.publishedDate}
                        courseTitle={'React Native Recommended Courses'}
                        courseRecommendationReason={course.recommendationReason}
                        icon={<IconUser />}
                        category={'some type'}
                      />
                    );
                  })}
                </Carousel>)
                : <p>No Recommended courses found.</p>}
            </div>
          </div>
        </Flex>
      </Container>
    </main>
  );
};

export default MyLearningComp;
