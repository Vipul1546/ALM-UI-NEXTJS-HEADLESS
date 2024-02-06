'use client'

import Flex from '@/components/Flex/Flex';
import styles from './product-listing.module.scss';


import Card from '@/components/Card/Card';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import SlkillsBg from '../../banner-parallex.jpeg';
import singleProduct1 from '../../img/products/b1.jpeg';
import singleProduct2 from '../../img/products/b2.png';
import singleProduct3 from '../../img/products/b3.png';
import singleProduct4 from '../../img/products/b4.jpeg';
import singleProduct5 from '../../img/products/b5.png';
import singleProduct6 from '../../img/products/b6.jpeg';

const ProductList = () => {
    window.scrollTo(0, 0);
    const productListData = [
        {
            key:1,
            href:'/productDetails',
            title:'Product 1',
            price:10,
            img:singleProduct1,
        },
        {
            key:2,
            href:'/productDetails',
            title:'Product 2',
            price:10,
            img:singleProduct2,
        },
        {
            key:3,
            href:'/productDetails',
            title:'Product 3',
            price:10,
            img:singleProduct3,
        },
        {
            key:4,
            href:'/productDetails',
            title:'Product 4',
            price:10,
            img:singleProduct4,
        },
        {
            key:5,
            href:'/productDetails',
            title:'Product 5',
            price:10,
            img:singleProduct5,
        },
        {
            key:6,
            href:'/productDetails',
            title:'Product 6',
            price:10,
            img:singleProduct6,
        },
        {
            key:1,
            href:'/productDetails',
            title:'Product 1',
            price:10,
            img:singleProduct1,
        },
        {
            key:2,
            href:'/productDetails',
            title:'Product 2',
            price:10,
            img:singleProduct2,
        },
        {
            key:3,
            href:'/productDetails',
            title:'Product 3',
            price:10,
            img:singleProduct3,
        },
        {
            key:4,
            href:'/productDetails',
            title:'Product 4',
            price:10,
            img:singleProduct4,
        },
        {
            key:5,
            href:'/productDetails',
            title:'Product 5',
            price:10,
            img:singleProduct5,
        },
        {
            key:6,
            href:'/productDetails',
            title:'Product 6',
            price:10,
            img:singleProduct6,
        },
    ]
    return (
        <main className={styles.main}>
            <section className={styles.sectionSkills} style={{ backgroundImage: `url(${SlkillsBg.src})` }}>
                <Container>
                    <a href='/course-listing' className={styles['explore-product']}>
                    <h2>Become a Certified Beauty Professional</h2>
                    <p>Explore our courses: Transforming Passion into Expertise</p>
                    </a>
                </Container>
            </section>
            <Container>
                <div className={styles["sticky-top-bar"]}>
                    <Flex container justifyContent='space-between' alignItems='center'>
                        <Heading customClass={styles['section-heading']} type="h2" weight="heading-extra-bold">Product Listing Page</Heading>
                    </Flex>
                </div>
                <Flex container justifyContent='flex-start'>
                    <div>
                        <Flex container gap='16px' className={styles['list-row']} flexWrap='wrap'>
                            {
                               (productListData?.map((product, idx) => {
                                const price = product.price != undefined ? 'Rs.' + product.price : 'Free';
                                const href = `/productDetails`;

                                return <Card
                                    key={idx}
                                    href={href}
                                    variant='tertiary'
                                    imagePath={product.img.src}
                                    altText={'test image'}
                                    students={price}
                                    title={product.title}
                                    category='Product Type'
                                    desc={
                                        'From Make-up School to Nail Art courses, London Academy offers a number of world-class courses and training programs.'
                                      }
                                    isVideoIconRequired = {false}
                                />

                            }
                            ))
                            }
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </main>

    )
}

export default ProductList;