import { useState } from 'react';
import CTA from '../CTA/CTA';
import Modal from './Modal';

export default {
  title: "components/Organisms/Modal",
  component: Modal,
  argTypes: {
    variant: {
          options: ["modal-lg" , "modal-sm",],
          control: { type: "radio" },
      },
    title:{
      control: { type: "text" },
    },
    children:{
      control: { type: "text" },
    },
  },
  args: {
    title: "Modal Example",
    children:  'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
  },
};

export const ModalExample = (args) => {
  const [modalData, setModalData] = useState({
    isModalEnable: false,
  });

  const togleModal = (e) => {
    e.preventDefault();
    setModalData({
      isModalEnable: !modalData.isModalEnable,
    });
  };

  const sucessModal = (e) => {
    e.preventDefault();
    setModalData({
      isModalEnable: false,
    });
    alert('modal success');
  };

  return (
    <>
      <CTA href="#" variant='danger' ctaType="button" onClick={togleModal}>
        Open Modal
      </CTA>
      {modalData.isModalEnable && (
        <Modal variant={args.variant} title={args.title} onCloseModal={togleModal} onSuccess={sucessModal}>
         {args.children}
        </Modal>
      )}
    </>
  );
};
