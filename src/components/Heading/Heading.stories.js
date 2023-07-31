import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

export const HeadingVariation = () => (
  <>
    <Heading type="h1" weight="heading-thin">
      This is sample text
    </Heading>
    <Heading type="h2" weight="heading-extra-light">
      This is sample text
    </Heading>
    <Heading type="h3" weight="heading-light">
      This is sample text
    </Heading>
    <Heading type="h4" weight="heading-normal">
      This is sample text
    </Heading>
    <Heading type="h5" weight="heading-medium">
      This is sample text
    </Heading>
    <Heading type="h6" weight="heading-semi-bold">
      This is sample text
    </Heading>
    <Heading type="h2" weight="heading-bold">
      This is sample text
    </Heading>
    <Heading type="h4" weight="heading-extra-bold">
      This is sample text
    </Heading>
    <Heading type="h3" weight="heading-heavy">
      This is sample text
    </Heading>
  </>
);
