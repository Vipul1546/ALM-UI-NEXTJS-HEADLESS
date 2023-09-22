import scenePic from '../../images/scene.jpeg';
import List from './List';
import listStyle from './List.module.scss';

export default {
  title: 'components/Atoms/List',
  component: List,
};

const teaserList = [
  {
    img: scenePic,
    title: 'Teaser title 1',
    description: 'Teaser description',
    href: '#',
  },
  {
    img: scenePic,
    title: 'Teaser title 2',
    description: 'Teaser description',
    href: '#',
  },
  {
    img: scenePic,
    title: 'Teaser title 3',
    description: 'Teaser description',
    href: '#',
  },
  {
    img: scenePic,
    title: 'Teaser title 4',
    description: 'Teaser description',
    href: '#',
  },
];
const teaserListWithoutImage = [
  {
    title: 'Teaser title 1',
    description: 'Teaser description',
    href: '#',
  },
  {
    title: 'Teaser title 2',
    description: 'Teaser description',
    href: '#',
  },
  {
    title: 'Teaser title 3',
    description: 'Teaser description',
    href: '#',
  },
  {
    title: 'Teaser title 4',
    description: 'Teaser description',
    href: '#',
  },
];

export const SimpleList = () => <List arrayList={['one', 'two', 'three']} listStyleType="square" />;
export const Teaser = () => <List arrayList={teaserList} listType="teaser" />;
export const TeaserInline = () => <List arrayList={teaserList} listType="teaser" variant={listStyle.inline} />;
export const TeaserWithoutImage = () => <List arrayList={teaserListWithoutImage} listType="teaser" />;
