import Heading from './Heading';

export default {
  title: "components/Atoms/Heading",
  component: Heading,
  argTypes: {
    type: {
          options: ["h1" , "h2", "h3", "h4", "h5", "h6"],
          control: { type: "radio" },
      },
    weight:{
      options: ["heading-thin" , "heading-extra-light","heading-light", "heading-normal", "heading-medium", "heading-semi-bold", "heading-bold", "heading-extra-bold", "heading-heavy"],
      control: { type: "radio" },
    },
  },
  type: {
    type: "h1",
    weight:"heading-thin",
  },
};

export const HeadingVariation = (args) => (
    <Heading type={args.type} weight={args.weight}>
      This is sample text
    </Heading>
);
