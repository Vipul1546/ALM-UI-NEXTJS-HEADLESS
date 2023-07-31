import Carousel from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const SimpleSlider = () => <Carousel name={'Single Item'} settings={settings}></Carousel>;

export const MultipleItems = () => (
  <Carousel name={'Multiple Item'} settings={{ ...settings, slidesToShow: 3 }}></Carousel>
);

export const CentreMode = () => <Carousel name={'Center Mode'} settings={{ ...settings, centerMode: true }}></Carousel>;

export const AutoPlay = () => <Carousel name={'Auto Play'} settings={{ ...settings, autoplay: true }}></Carousel>;

export const Fade = () => <Carousel name={'Fade'} settings={{ ...settings, fade: true }}></Carousel>;
