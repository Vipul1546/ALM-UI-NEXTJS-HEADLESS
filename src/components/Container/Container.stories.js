import Container from './Container';

export default {
  title: 'Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: 'For flex and block max-width is 1180px and For fluid no max-width',
      },
    },
  },
  argTypes: {
    variant: {
      options: ['flex', 'fluid', 'block'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
    maxWidth: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'block',
  },
};

export const ContainerComponent = args => {
  return (
    <Container variant={args.variant} maxWidth={args.maxWidth}>
      {args.children || 'Container content : - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
    </Container>
  );
};
