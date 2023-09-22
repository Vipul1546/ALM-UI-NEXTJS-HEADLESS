import Separator from './Separator';

export default {
  title: "components/Atoms/Separator",
  component: Separator,
    argTypes: {
      height: {
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            control: { type: "radio" },
        },
      separatorColor:{
        control: { type: "text" },
      },
      marginTop:{
        control: {
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          control: { type: "radio" },
        },
      marginBottom:{
          control: {
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            control: { type: "radio" },
          },
      },
    },
  },
  args: {
    height: 2,
    separatorColor:'black',
  },
};

export const SimpleSeparator = (args) => <Separator height={args.height} separatorColor={args.separatorColor} marginTop={args.marginTop} marginBottom={args.marginBottom} />;