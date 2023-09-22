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


import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import { FILTER_PARAM_MAPPING, LISTING } from '@/constants/almConstant';
import { getDuration } from '@/helper';
import { getCoursesList, getSearchList } from '@/services/alm';
import { getEnv } from '../../../utils/getEnv';
import SwitchView from '../SwitchView/SwitchView';

const Listing = ({ courseList, FilterList, isServer }) => {
    const { courseListing,
        updateCourseListing,
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
    const [toggleView, setToggleView] = useState('list');
    const { width, height } = useWindowSize();
    const isMobile = width < 768;

    const { FILTERS } = LISTING

    // Create inline loading UI
    const isMutating = isFetching || isPending;

    useEffect(() => {
        const allParams = getFiltersFromUrlParam(searchParams)
        const searchParam = searchParams.get('search')
        updateAppliedFilter({
            ...appliedFilters,
            filters: { ...allParams },
            isSearch: !!searchParam,
            searchPhrase: searchParam
        })
        updateFilters([...FilterList])
        updateCourseListing({ ...courseList })
        setIsClient(true)
        const { ALM_TOKEN_URL } = getEnv()
    }, [])

    useEffect(() => {
        if (isClient)
            updateListing(appliedFilters)
    }, [appliedFilters])

    const updateListing = async (appliedFilters) => {
        const { filters, sort, isSearch, searchPhrase } = appliedFilters
        let courseList = {}
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
        updateCourseListing({ ...courseList });
        if (isSearch) {
            listingParams = { ...listingParams, query: searchPhrase }
            courseList = await getSearchList({ ...listingParams });
        } else {
            courseList = await getCoursesList({ ...listingParams });

        }
        updateCourseListing({ ...courseList });
        startTransition(() => {
            // Refresh the current route and fetch new data from the server without
            // losing client-side browser or React state.
            const newUrlParams = new URLSearchParams(urlSearchParams.toString());
            if (sort?.value) newUrlParams.set('sort', encodeURIComponent(sort?.value));
            if (isSearch) newUrlParams.set('search', encodeURIComponent(searchPhrase));
            if (Object.keys(filters).length > 0) {
                for (const filter in filters) {
                    newUrlParams.set(filter, encodeURIComponent(filters[filter]));
                }
            }
            router.push(`${pathname}?${newUrlParams}`);
        });
        setIsFetching(false)
    }
    const handleToggleClick = (type) => {

        setToggleView(type)
    }

    return (
        <main className={styles.main}>
            <Container>
                <Flex container justifyContent='flex-start'>
                    {isMobile && !filterOpen ? <div onClick={() => setFilterOpen(!filterOpen)} className={styles['btn-float']}><i class="fa-solid fa-filter"></i></div> : isMobile && filterOpen ? <SideBar setFilterOpen={setFilterOpen} isMobile /> : <SideBar setFilterOpen={setFilterOpen} />}
                    <div className={styles['right-panel']}>
                        <Flex container justifyContent='space-between' alignItems='center'>
                            <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">Courses Page</Heading>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <SwitchView handleToggleClick={handleToggleClick} />
                                <SortingBox />
                                <Chevron className={styles.chevron} height={'10px'} width={'10px'} />
                            </div>
                        </Flex>
                        <Flex container gap='16px' className={styles['list-row']} flexWrap='wrap'>
                            {
                                isMutating
                                    ? <div>Loading...</div> :
                                    courseListing?.data?.length > 0 && !isMutating ?
                                        (courseListing?.data?.map((course, idx) => {
                                            const bannerImage = course.attributes.imageUrl != undefined ? course.attributes.imageUrl : `https://picsum.photos/350/22${idx}`;
                                            const authorName = course.attributes.authorNames != undefined ? course.attributes.authorNames[0] : 'User';
                                            const price = course.attributes.price != undefined ? 'Rs.' + course.attributes.price : 'Free';
                                            const duration = getDuration(course.attributes.duration);
                                            const href = `/course/${course.id}`

                                            return <Card
                                                key={idx}
                                                href={href}
                                                variant={toggleView == 'list' ? 'secondary' : 'tertiary'}
                                                imagePath={bannerImage}
                                                altText={'test image'}
                                                authorName={authorName}
                                                authorImg={course.attributes.imageUrl}
                                                students={price}
                                                title={course.attributes.name || course.attributes.localizedMetadata[0].name}
                                                duration={`Duration: ${duration}`}
                                                category={course.attributes.enrollmentType}
                                                style={toggleView == 'grid' ? '' : { flex: '0 0 100%' }}
                                            />

                                        }
                                        ))
                                        : <p> No Result Found </p>
                            }
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </main>

    )
}

export default Listing