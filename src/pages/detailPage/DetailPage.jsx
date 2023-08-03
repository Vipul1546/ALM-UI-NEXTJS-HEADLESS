'use client';
import Flex from '@/components/Flex/Flex';
import Card from '../../components/Card/Card';
import styles from './DetailPage.module.scss';
const DetailPage = ({ data }) => {
  const { attributes, relationships, id: courseId } = data?.data;
  const headingBackGround = {
    'background-image': 'url(' + attributes.bannerUrl + ')',
  };
  return (
    <section className={styles['detail-page-container']}>
      <div className={styles['detail-page']}>
        <div className={styles['detail-page__heading']} style={headingBackGround}>
          <div className={styles.title}>{attributes?.localizedMetadata[0]?.name}</div>
          <div className={styles.description}>{attributes?.loFormat}</div>
          {/* <CTA variant={`${ctaStyle.button} ${ctaStyle.success} ${styles.enrollnow}`}>Enroll Now</CTA> */}
        </div>
        <div className={styles['detail-page__body']}>
          <div className={styles.detail}>
            <h1 className={styles.h2}>{attributes?.localizedMetadata[0]?.name}</h1>
            <div className={styles.description}>{attributes?.localizedMetadata[0]?.overview}</div>
            <div className={styles['video-container']}>
              <video width="100%" height="100%" controls>
                <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
              </video>
            </div>
            <div className={styles.list}>
              <div className={styles.title}>Modules</div>
              <div className={styles.content}>
                <div className={styles['section-title']}>core content</div>
                <Flex container gap="16px">
                  {data?.included.map((course, idx) => {
                    return (
                      <Card
                        variant={'primary'}
                        imagePath={'https://picsum.photos/350/220'}
                        altText={'test image'}
                        username={course.attributes.localizedMetadata[0].name}></Card>
                    );
                  })}
                </Flex>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles['cource-detail-container']}>
              <div className={styles.list}>
                <div className={styles.listitem}>No Dead Line</div>
                <div className={styles.listitem}>
                  Instance Name :
                  {relationships?.instances.data.map(instance => (
                    <span key={instance.id}>{instance.type}</span>
                  ))}
                </div>
                <div className={styles.listitem}>
                  Skills Covered :
                  {relationships?.skills.data.map(skill => (
                    <span key={skill.id}>{skill.type}</span>
                  ))}
                </div>
              </div>
              <div className={styles.authorlist}>
                <div className={styles.authortitle}>Author(s)</div>
                {attributes.authorNames.map(author => (
                  <div className={styles.author} key={author}>
                    <i className="fas fa-user"></i>
                    &nbsp;{author}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
