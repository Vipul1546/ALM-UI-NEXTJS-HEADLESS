import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { images } from './images';

const Carousel = ({ settings, name, items }) => {
  const image_items = items ? items : images;
  return (
    <>
      <h2> {name}</h2>
      <Slider {...settings}>
        {image_items.map(image => {
          return (
            <div className="wrapper" key={image.id}>
              <img className="sliderImg" src={image.url} />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

Carousel.propTypes = {
  dots: PropTypes.bool,
  infinite: PropTypes.bool,
  speed: PropTypes.string.isRequired,
};

Carousel.defaultProps = {
  dots: 'true',
  infinite: 'true',
  speed: '500',
  slidesToShow: '1',
  slidesToScroll: '1',
};

export default Carousel;
