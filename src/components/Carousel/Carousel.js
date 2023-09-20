import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


const Carousel = ({ settings, children }) => {


  const defaultSettings = {
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const sliderSettings = {
    ...defaultSettings,
    ...settings
  };

  useEffect(() => {
    const slickSlide = document.querySelectorAll('.slick-slide');
    slickSlide.forEach(el => {
      el.style.padding = '0 10px';
    })
  })

  return (
    <>
      <Slider {...sliderSettings}>{children}</Slider>
    </>
  );
};

Carousel.propTypes = {
  arrows: PropTypes.bool,
  dots: PropTypes.bool,
  fade: PropTypes.bool,
  centerMode: PropTypes.bool,
  centerPadding: PropTypes.string,
  rtl: PropTypes.bool,
  slidesToShow: PropTypes.number,
  slidesToScroll: PropTypes.number,
};


export default Carousel;
