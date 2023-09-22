import IconPlay from '../../assets/icons/IconPlay';
import IconUser from '../../assets/icons/IconUser';
import Card from './Card';
export default {
  title: 'components/Molecules/Card',
  component: Card,
};

const imgPath = 'https://picsum.photos/350/220';

export const Primary = () => (
  <Card
    variant={'primary'}
    imagePath={imgPath}
    altText={'test image'}
    username={'John Doe'}
    likes={380}
    duration={'1h 1m'}
    icon={<IconUser />}
    href="#"
  ></Card>
);


export const Secondary = () => (
  <Card
    variant={'secondary'}
    imagePath={imgPath}
    altText={'test image'}
    authorImg={imgPath}
    authorAltText={'Author Name'}
    authorName={'Roxane Gay'}
    authorTitle={'Writer & Editor'}
    students={'43,221 Students'}
    title={'Creative writing: Crafting Personal Essays with impact'}
    duration={'1h 1m'}
    icon={<IconUser />}
    href={'#'}
    category={'Original'}
  ></Card>
);

export const Tertiary = () => (
  <Card
    variant={'tertiary'}
    imagePath={imgPath}
    altText={'test image'}
    authorImg={imgPath}
    authorAltText={'Author Name'}
    authorName={'Roxane Gay'}
    authorTitle={'Writer & Editor'}
    students={'43,221 Students'}
    title={'Creative writing: Crafting Personal Essays with impact'}
    duration={'1h 1m'}
    icon={<IconUser />}
    category={'Original'}
  ></Card>
);

export const TextIcon = () => (
  <Card
    variant={'texticon'}
    title={'Creative writing: Crafting Personal Essays with impact'}
    icon={<IconPlay />}
  ></Card>
);

export const InProgress = () => (
  <Card
    variant={'in-progress'}
    imagePath={imgPath}
    altText={'test image'}
    title={'Creative writing: Crafting Personal Essays with impact'}
    progress={10}
  ></Card>
);