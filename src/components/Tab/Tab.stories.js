import Tab from './Tab';

export default {
    title: "components/Molecules/Tab",
    component: Tab,
    argTypes: {
        variant: {
            options: ["primary" , "secondary"],
            control: { type: "radio" },
        },
    },
  };

export const TabComponent = (args) => <Tab variant={args.variant}>{args.variant}</Tab>;