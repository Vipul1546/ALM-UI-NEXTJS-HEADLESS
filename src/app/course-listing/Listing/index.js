'use client'

import Chevron from '@/assets/icons/Chevron';
import Card from '@/components/Card/Card';
import Flex from '@/components/Flex/Flex';
import SideBar from '@/components/SideBar';
import { useAlmContext } from '@/context/almContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import useWindowSize from '../../../utils/customhooks/useWindowSize';
import SortingBox from '../SortingBox/SortingBox';
import { getFiltersFromUrlParam } from '../helper';
import styles from './listing.module.scss';


import { FILTER_PARAM_MAPPING, LISTING } from '@/constants/almConstant';
import { getCoursesList } from '@/services/alm';
import { getEnv } from '../../../utils/getEnv';

const Listing = ({ courseList, FilterList, isServer }) => {
    const { courseListing,
        updateCourseListing,
        filters,
        appliedFilters,
        updateFilters,
        updateAppliedFilter
    } = useAlmContext()
    const router = useRouter();
    const pathname = usePathname();
    const urlSearchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const [isFetching, setIsFetching] = useState(false);
    const [isClient, setIsClient] = useState(!isServer)
    const searchParams = useSearchParams()

    const [filterOpen, setFilterOpen] = useState(false);
    const { width, height } = useWindowSize();
    const isMobile = width < 768;

    const { FILTERS } = LISTING

    // Create inline loading UI
    const isMutating = isFetching || isPending;

    useEffect(() => {
        const allParams = getFiltersFromUrlParam(searchParams)
        updateAppliedFilter({
            ...appliedFilters,
            filters: { ...allParams }
        })
        updateCourseListing({ ...courseList })
        updateFilters([...FilterList])
        setIsClient(true)
        const { ALM_TOKEN_URL } = getEnv()
    }, [])

    useEffect(() => {
        if (isClient)
            updateListing(appliedFilters)
    }, [appliedFilters])

    const updateListing = async (appliedFilters) => {
        const { filters, sort } = appliedFilters
        setIsFetching(true);
        let listingParams = {
            'page[limit]': 12,
            'filter.loTypes': 'course',
            'filter.catalogIds': 163584,
            sort: sort?.value || 'name',
            'filter.ignoreEnhancedLP': true,
        }
        if (Object.keys(filters).length > 0) {
            for (const filter in filters) {
                const filterName = filter.toLocaleLowerCase()
                const filterParam = FILTER_PARAM_MAPPING[filterName]
                if (filterParam)
                    listingParams[filterParam] = [...filters[filter]]
            }
        }
        const courseList = await getCoursesList({ ...listingParams });
        updateCourseListing({ ...courseList });
        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            const newUrlParams = new URLSearchParams(urlSearchParams.toString());
            if (sort?.value) newUrlParams.set('sort', encodeURIComponent(sort?.value));
            if (Object.keys(filters).length > 0) {
                for (const filter in filters) {
                    newUrlParams.set(filter, encodeURIComponent(filters[filter]));
                }
            }
            router.push(`${pathname}?${newUrlParams}`);
        });
        setIsFetching(false)
    }

    return (
        <main className={styles.main}>
            <Flex container justifyContent='flex-start'>
                {isMobile && !filterOpen ? <div onClick={() => setFilterOpen(!filterOpen)} className={styles['btn-float']}><i class="fa-solid fa-filter"></i></div> : isMobile && filterOpen ? <SideBar setFilterOpen={setFilterOpen} /> : <SideBar setFilterOpen={setFilterOpen} />}
                <div className={styles['right-panel']}>
                    <Flex container justifyContent='space-between' alignItems='center'>
                        <h2>Courses Page</h2>
                        <div>
                            <SortingBox />
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