import Card from './Card';
export default {
  title: 'Card',
  component: Card,
};

export const Primary = () => (
  <Card
    variant={'primary'}
    imagePath={'https://picsum.photos/350/220'}
    altText={'test image'}
    username={'John Doe'}
    likes={380}
    duration={'1h 1m'}
    icon={'fa-heart'}
  ></Card>
);


export const Secondary = () => (
  <Card
    variant={'secondary'}
    imagePath={'https://picsum.photos/350/220'}
    altText={'test image'}
    authorImg={'https://picsum.photos/350/220'}
    authorAltText={'Author Name'}
    authorName={'Roxane Gay'}
    authorTitle={'Writer & Editor'}
    students={'43,221 Students'}
    title={'Creative writing: Crafting Personal Essays with impact'}
    duration={'1h 1m'}
    icon={'fa-bookmark'}
    category={'Original'}
  ></Card>
);

export const Tertiary = () => (
  <Card
    variant={'tertiary'}
    imagePath={'https://picsum.photos/350/220'}
    altText={'test image'}
    authorImg={'https://picsum.photos/350/220'}
    authorAltText={'Author Name'}
    authorName={'Roxane Gay'}
    authorTitle={'Writer & Editor'}
    students={'43,221 Students'}
    title={'Creative writing: Crafting Personal Essays with impact'}
    duration={'1h 1m'}
    icon={'fa-bookmark'}
    category={'Original'}
  ></Card>
);