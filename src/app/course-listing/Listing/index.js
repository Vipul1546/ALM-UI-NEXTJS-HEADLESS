'use client'

import Chevron from '@/assets/icons/Chevron';
import Card from '@/components/Card/Card';
import Flex from '@/components/Flex/Flex';
import SideBar from '@/components/SideBar';
import { useEffect, useState, useTransition } from 'react';
import { useAlmContext } from '../../../context/almContext';
import SortingBox from '../SortingBox/SortingBox';
import styles from './listing.module.scss';

import { getEnv } from '../../../utils/getEnv';

const Listing = ({ courseList }) => {
    const { courseListing, updateCourseListing } = useAlmContext()
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);

    // Create inline loading UI
    const isMutating = isFetching || isPending;

    useEffect(() => {
        updateCourseListing({ ...courseList })
        const { ALM_TOKEN_URL } = getEnv()
    }, [])

    const handleFetchState = (stateFlag) => {
        setIsFetching(stateFlag);
    }

    return (
        <main className={styles.main}>
            <Flex container justifyContent='flex-start'>
                <SideBar />
                <div className={styles['right-panel']}>
                    <Flex container justifyContent='space-between' alignItems='center'>
                        <h2>Courses Page</h2>
                        <div>
                            <SortingBox courseList={courseListing} fetchState={handleFetchState} />
                            <Chevron className={styles.chevron} height={'10px'} width={'10px'} />
                        </div>
                    </Flex>
                    <Flex container gap='16px' className={styles['list-row']} flexWrap='wrap'>
                        {
                            isMutating
                                ? <div>Loading...</div>
                                : courseListing?.data?.map((course, idx) => {
                                    const bannerImage = course.attributes.imageUrl != undefined ? course.attributes.imageUrl : `https://picsum.photos/350/22${idx}`;
                                    const authorName = course.attributes.authorNames != undefined ? course.attributes.authorNames[0] : 'User';
                                    const price = course.attributes.price != undefined ? 'Rs.' + course.attributes.price : 'Free';

                                    const href = `/course/${course.id}`
                                    return <Card
                                        key={idx}
                                        href={href}
                                        variant={'tertiary'}
                                        imagePath={bannerImage}
                                        altText={'test image'}
                                        authorName={authorName}
                                        authorTitle={course.attributes.imageUrl}
                                        students={price}
                                        title={course.attributes.localizedMetadata[0].name}
                                        duration={`Duration: ${course.attributes.duration}`}
                                        icon={'fa-bookmark'}
                                        category={course.attributes.enrollmentType}
                                    />

                                }
                                )
                        }
                    </Flex>
                </div>
            </Flex>
        </main>
    )
}

export default Listing