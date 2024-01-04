import TextAndMedia from './Text-and-media';

export default {
  title: "components/molecules/Text and media",
  component: TextAndMedia,
  parameters: {
    docs: {
      description: {
        component: 'CTA component documentation.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
      source: { type: 'code' },
    },

    argTypes: {
      title:{
        control: { type: "text" },
      },
      subtitle:{
        control: { type: "text" },
      },
      text:{
        options: ["button" , "sumit"],
        control: { type: "select" },
      },
      imagePath:{
        control: { type: "text" },
      },
    },
  },
  args: {
    title: "LONDON BEAUTY ACADEMY BY AMA",
    subtitle: "Nurturing International Beauty Professionals with Perfection",
    text:"LONDON BEAUTY ACADEMY BY AMA a comprehensive Beauty Academy offering courses in Makeup Hair Skin Nails Nutrition Salon Management, Hair extension, eyelashes extension and others, LONDON BEAUTY ACADEMY BY AMA is the finest and best International Beauty Academy in India...",
    imagePath:"/06.jpeg",
  },
};

export const textAndMediaComponent = (args) => (
      <TextAndMedia title={args.title} subtitle={args.subtitle} text={args.text} imagePath={args.imagePath}></TextAndMedia>
);
