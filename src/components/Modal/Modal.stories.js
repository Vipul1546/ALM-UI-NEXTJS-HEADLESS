import { useState } from 'react';
import CTA from '../CTA/CTA';
import styles from '../CTA/CTA.module.scss';
import Modal from './Modal';

export default {
  title: 'Modal',
  component: Modal,
};

export const ModalExample = () => {
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
    <>
      <CTA href="#" variant={`${styles.button} ${styles.danger}`} ctaType="button" onClick={togleModal}>
        Open Modal
      </CTA>
      {modalData.isModalEnable && (
        <Modal title="Modal Example" onCloseModal={togleModal} onSuccess={sucessModal}>
          <p>this is modal body</p>
        </Modal>
      )}
    </>
  );
};
