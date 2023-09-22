import ProgressBar from './ProgressBar';

export default {
  title: "components/Atoms/ProgressBar",
  component: ProgressBar,
    argTypes: {
      height: {
            options: [10, 15, 20, 25, 30, 35, 40, 45, 50],
            control: { type: "radio" },
        },
      bgcolor:{
        control: { type: "text" },
      },
      textColor:{
        control: { type: "text" },
      },
      progress:{
        control: {
          control: { type: "text" },
        },
    },
  },
  args: {
    bgcolor: "orange",
    textColor:'black',
    progress:55,
    height:30,
  },
};

export const ProgressBarVersion1 = (args) => (
    <ProgressBar bgcolor={args.bgcolor} textColor={args.textColor} progress={args.progress} height={args.height} />
);
