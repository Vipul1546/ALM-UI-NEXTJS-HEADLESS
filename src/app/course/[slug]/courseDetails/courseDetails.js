'use client';
import Flex from '@/components/Flex/Flex';
import Script from 'next/script';

import IconCheck from '@/assets/icons/IconCheck';
import IconPlay from '@/assets/icons/IconPlay';
import CTA from '@/components/CTA/CTA';
import Card from '@/components/Card/Card';
import Container from '@/components/Container/Container';
import Modal from '@/components/Modal/Modal';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import CourseRating from '@/components/course-rating/course-rating';
import { getDuration } from '@/helper';
import { deleteBookMarkCourse, patchRating, postBookMarkCourse, postEnrollCourse } from '@/services/alm';
import { useEffect, useState } from 'react';
import FluidicPlayer from '../FludicPlayer';
import styles from './courseDetails.module.scss';

const CourseDetails = ({ data }) => {
  const { attributes, relationships, id: courseId } = data?.data;
  const loResourcesData = data.included[0].relationships.loResources?.data || [];
  const loIncluded = data.included || [];
  const loResourcesDataArray = [];
  const loInstanceId = relationships.instances.data[0].id;
  const loEnrollment = relationships.enrollment;

  const [isEnrolled, setIsEnrolled] = useState(false);
  const [enrollmentButtonText, setEnrollmentButtonText] = useState('Enroll');
  const [isSaved, setIsSaved] = useState(attributes.isBookmarked);
  const [indivisualCurrentRating, setIndivisualCurrentRating] = useState(0);
  const [loSkillArray, setLoSkillArray] = useState([]);

  
  for (const item of loResourcesData) {
    loResourcesDataArray.push(item.id);
  }

  const checkIfVideoIsWatched = (videoId)=>{
    let completed = false;
    loIncluded.forEach(include=>{
      if(include.type === 'learningObjectResourceGrade' && include.id.includes(videoId)){
        if(include.attributes?.dateCompleted){
          completed = true;
        }
      }
    });
    return completed;
  }

  const calculateProgress = ()=>{
    let detailedObject = [];
    let completedVideos = 0;
    loIncluded.forEach(include=>{
      if(include.type === 'learningObjectResourceGrade'){
        detailedObject.push(include);
        if(include.attributes?.dateCompleted){
          completedVideos++;
        }
      }
    });
    if(completedVideos === 0 || detailedObject.length === 0){
      return 0;
    }else{
      return (completedVideos/(detailedObject.length))*100;
    }
  }

  const headingBackGround = {
    'background-image': 'url(' + attributes.bannerUrl + ')',
  };

  const [modalData, setModalData] = useState({
    isModalEnable: false,
    videoId:''
  });

  const togleModal = (videoId) => {
    setModalData({
      isModalEnable: !modalData.isModalEnable,
      videoId: videoId
    });
  };

  useEffect(() => {
    if(loEnrollment && loEnrollment.data){
      const progress = calculateProgress();
      setIsEnrolled(true);
      if(progress===0)
      setEnrollmentButtonText('Start');
      if(progress>0)
      setEnrollmentButtonText('Continue');
      if(progress>=100)
      setEnrollmentButtonText('Revisit')
    }
  },[data]);

  useEffect(() => {
  let skillArray = [];
  window.addEventListener('message', (e)=>{
      if(e.data.type === 'PLAYER_CLOSED'){
          togleModal();
      }
  }, true);

  loIncluded.forEach(include=>{
    if(include.type === "learningObjectInstanceEnrollment"){
      setIndivisualCurrentRating(include.attributes.rating);
    }
  });
  relationships.skills.data.forEach(skill=>{
    const skillId = skill.id.split('_')[1];
    let skillObj = {name:'', lavel:''};
    loIncluded.forEach(include=>{
      if(include.type === "skill" && include.id === skillId){
        skillObj.name = include.attributes.name;
      }else if(include.type === "skillLevel" && include.id.includes(skillId)){
        skillObj.lavel = include.attributes.name;
      }
    });
    skillArray.push(skillObj);
  });
  setLoSkillArray(skillArray);
  },[]);

  const startVideo = ()=>{
    let firstVideoId = '';
    data?.included.forEach((res) => {
      if (loResourcesDataArray.includes(res.id) && !firstVideoId && (!checkIfVideoIsWatched(res.id) || enrollmentButtonText==='Revisit')) {
        firstVideoId = res.id;
      }
    });
    setModalData({
      isModalEnable: true,
      videoId: firstVideoId
    });
  }

  const handleEnroll = ()=>{
    if(isEnrolled){
      startVideo();
    }else{
      postEnrollCourse(courseId, loInstanceId).then(data=>{
        setIsEnrolled(true);
        setEnrollmentButtonText('Start')
        startVideo();
      });
    }
  }

  const handleSave = ()=>{
    if(!isSaved){
      postBookMarkCourse(courseId).then(data=>{
        setIsSaved(true);
      });
    }else{
      deleteBookMarkCourse(courseId).then(data=>{
        setIsSaved(false);
      });
    }
  }

  const sucessModal = () => {
    setModalData({
      isModalEnable: false,
    });
    handleEnroll();
  };

  const handleRating = (rating)=>{
    patchRating(loEnrollment.data.id, {"rating":rating}).then(data=>{
      console.log(data);
    });
  }


  return (
    <section className={styles['detail-page-container']}>
      <Script strategy="lazyOnload" src="https://cpcontentsdev.adobe.com/public/publiccdn/playerInteractionLib.min.js" />
      <Container>
        <div className={styles['detail-page']}>
          <div className={styles['detail-page__heading']} style={headingBackGround}>
            <div className={styles.title}>{attributes?.localizedMetadata[0]?.name}</div>
            <div className={styles.description}>{attributes?.loFormat}</div>
            <CourseRating rating={attributes.rating.averageRating} submitEnabled={false}/>
            <div className={styles.progressBarContainer}>
              <div>Progress: </div>
              <ProgressBar bgcolor={'#fd60b1'} textColor={'#000000'} progress={calculateProgress()} height={15} />
            </div>
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
                    <h6 className={styles.h2}>Duration: {getDuration(attributes?.duration)}</h6>
                  </div>
                  <Flex gap="16px">
                    {data?.included.map((res,idx) => {

                      if (loResourcesDataArray.includes(res.id)) {
                        const title = res.attributes.localizedMetadata[0].name;
                        return (
                          <>
                            <Card key={idx}
                              onClick={()=>{togleModal(res.id)}}
                              variant={'texticon'}
                              title={title}
                              icon={<><IconPlay /> 
                              {(checkIfVideoIsWatched(res.id) && <IconCheck />)}
                              </>}
                            ></Card>

                            {isEnrolled && modalData.isModalEnable && modalData.videoId === res.id &&(
                              <Modal variant='modal-lg' title={title} showButton={false} showClose={false}>
                                <div className={styles['video-container']}>
                                  <FluidicPlayer
                                    key={idx}
                                    loid={courseId}
                                    loResourcesId={res?.id}
                                    accountId="116411"
                                    userId="19381376"
                                  />
                                </div>
                              </Modal>
                            )}

                            {!isEnrolled && modalData.isModalEnable && modalData.videoId === res.id &&(
                              <Modal variant='modal-sm' title={title} onCloseModal={togleModal} onSuccess={sucessModal} successButtonText='Continue' closeButtonText='Cancel' showButton={true} showClose={true}>
                                <p>Clicking on a Module will enroll you in the Course/ Learning Path/ Certification/ Job Aid and launch. This behavior will be remembered and can be modified from Profile Settings. Do you wish to continue?</p>
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
              <CTA variant='danger' addOnClass='full-width' type='button' onClick={handleEnroll}>{enrollmentButtonText}</CTA>
              <CTA variant='danger' addOnClass='full-width' type='button' onClick={handleSave}>{isSaved?'Saved':'Save'}</CTA>
              {isEnrolled && <CourseRating rating={indivisualCurrentRating} handleSubmit={(data)=>{handleRating(data)}} />}
              <div className={styles['cource-detail-container']}>
                <div className={styles.list}>
                  <div className={styles.listitem}>No Dead Line</div>
                  <div className={styles.listitem}>
                    Skills Covered :
                    {loSkillArray.map((skill,idx) => (
                      <span key={skill.name+idx}>{skill.name} - ({skill.lavel})</span>
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
      </Container>
    </section>
  );
};

export default CourseDetails;
