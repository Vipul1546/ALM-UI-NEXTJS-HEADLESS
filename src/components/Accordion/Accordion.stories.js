import Accordion from './Accordion';

export default {
    title: "components/Molecules/Accordion",
    component: Accordion,
    argTypes: {
        variant: {
            options: ["primary" , "secondary", "hover-image"],
            control: { type: "radio" },
        },
        iconType: {
            options: ["default" , "plus"],
            control: { type: "radio" },
        },
    },
    args: {
        variant: "primary",
        iconType: "default",
      },
  };

export const AccordionComponent = (args) => <Accordion variant={args.variant} iconType={args.iconType}>{args.variant}</Accordion>;
