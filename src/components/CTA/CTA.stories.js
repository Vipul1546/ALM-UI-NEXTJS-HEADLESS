import CTA from './CTA';

export default {
  title: "CTA",
  component: CTA,
  parameters: {
    docs: {
      description: {
        component: 'CTA component documentation.',
      },
      story: { inline: true },
      canvas: { sourceState: 'shown' },
      source: { type: 'code' },
    },
  },
  argTypes: {
    variant: {
          options: ["primary" , "secondary", "success", "danger"],
          control: { type: "radio" },
          description: "cta variations",
      },
    addOnClass:{
      options: ["outlined" , "full-width","disabled", "none"],
      control: { type: "radio" },
    },
    children:{
      control: { type: "text" },
    },
    href:{
      control: { type: "text" },
    },
    type:{
      options: ["button" , "sumit"],
      control: { type: "select" },
    },
    tag:{
      control: { type: "text" },
    },
  },
  args: {
    variant: "primary",
    tag: "button",
  },
};

export const CTAComponent = (args) => (
      <CTA tag={args.tag} variant={args.variant} addOnClass={args.addOnClass} type={args.type} href={args.href}>
          {args.children?args.children:args.variant}
      </CTA>
);
