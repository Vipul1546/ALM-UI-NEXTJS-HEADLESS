import carPic from '../../images/car.jpg';
import Container from '../Container/Container';
import ImageNext from './ImageNext';

export default {
  title: 'components/Atoms/ImageNext',
  component: ImageNext,
};

export const Image = () => <ImageNext imagePath={carPic} imageClass="image-height-100" altText="image" />;

export const ImageWithCaption = () => (
  <Container width="650px" height="500px">
    <ImageNext
      imagePath={carPic}
      imageClass="image-height-100"
      altText="image"
      caption="image caption test text"
    />
  </Container>
);

export const ImageAsLink = () => (
  <Container width="650px" height="500px">
    <ImageNext
      imagePath={carPic}
      imageClass="image-height-100"
      altText="image"
      caption="image caption test text"
      href="/?path=/story/cta--anchor-link-danger"
    />
  </Container>
);
