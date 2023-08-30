import ImageNext from '../Image/ImageNext';
import Carousel from './Carousel';
import { images } from './images';

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {
    arrows: {
      control: { type: "boolean" },
      description: 'test'
    },
    dots: {
      control: { type: "boolean" },
    },
    fade: {
      control: { type: "boolean" },
    },
    centerMode: {
      control: { type: "boolean" },
    },
    centerPadding: {
      control: { type: "text" },
    },
    rtl: {
      control: { type: "boolean" },
    },
    slidesToShow: {
      control: { type: "number" },
    },
    slidesToScroll: {
      control: { type: "number" },
    },

  },
};


const image_items = images;

export const Base = ({ ...args }) => {
  let controls = { ...args };

  return (
    <Carousel settings={controls}>
      {image_items.map(image => {
        return (
          <div className="wrapper" key={image.id}>
            <ImageNext imagePath={image.url} />
          </div>
        );
      })}
    </Carousel>
  )
};


