'use client';
import Flex from '@/components/Flex/Flex';

import IconPlay from '@/assets/icons/IconPlay';
import Card from '@/components/Card/Card';
import Modal from '@/components/Modal/Modal';
import { useState } from 'react';
import FluidicPlayer from '../FludicPlayer';
import styles from './courseDetails.module.scss';
const CourseDetails = ({ data }) => {

  const { attributes, relationships, id: courseId } = data?.data;
  const loResourcesData = data.included[0].relationships.loResources?.data || [];
  const loResourcesDataArray = [];

  for (const item of loResourcesData) {
    loResourcesDataArray.push(item.id);
  }

  const headingBackGround = {
    'background-image': 'url(' + attributes.bannerUrl + ')',
  };

  const [modalData, setModalData] = useState({
    isModalEnable: false,
  });

  const togleModal = () => {
    setModalData({
      isModalEnable: !modalData.isModalEnable,
    });
  };

  const sucessModal = () => {
    setModalData({
      isModalEnable: false,
    });
    alert('modal success');
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

            <div className={styles.list}>
              <div className={styles.title}>Modules</div>
              <div className={styles.content}>
                <div className={styles['section-title']}>
                  <h6 className={styles.h2}>Core Content</h6>
                  <h6 className={styles.h2}>Duration: {attributes?.duration}</h6>
                </div>
                <Flex gap="16px">
                  {data?.included.map((res) => {

                    if (loResourcesDataArray.includes(res.id)) {
                      const title = res.attributes.localizedMetadata[0].name;
                      return (
                        <>
                          <Card
                            onClick={togleModal}
                            variant={'texticon'}
                            title={title}
                            icon={<IconPlay />}
                          ></Card>

                          {modalData.isModalEnable && (
                            <Modal variant='modal-lg' title={title} onCloseModal={togleModal} onSuccess={sucessModal}>
                              <div className={styles['video-container']}>
                                <FluidicPlayer
                                  loid={res.id}
                                  accountId="116411"
                                  userId="19381376"
                                  token="e9d7317f3000772b73f9394675f86465"
                                />
                              </div>
                            </Modal>
                          )}
                        </>
                      );
                    }
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
                {attributes.authorNames?.map(author => (
                  <div className={styles.author} key={author}>
                    <i className="fas fa-user"></i>
                    &nbsp;{author}
                  </div>
                ))}
                <div>
                  <div className={styles.authortitle}>Tags</div>
                  <ul className={styles.tags}>
                    {attributes.tags?.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
