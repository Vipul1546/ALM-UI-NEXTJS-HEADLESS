import CTA from './CTA';

export default {
  title: "CTA",
  component: CTA,
  argTypes: {
    variant: {
          options: ["primary" , "secondary", "success", "danger"],
          control: { type: "radio" },
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
  },
  args: {
    variant: "primary",
  },
};

export const Button = ({...args}) => {
  let controls = {...args};
  return (
    <>
      <p>Note 1 :- If we set href then the button will convert into anchor link</p>
      <p>Note 2 :- Type will not get applied for anchor tag</p>
      
      <CTA variant={controls.variant} addOnClass={controls.addOnClass} type={controls.type}>
          {controls.children?controls.children:controls.variant}
      </CTA>
    </>
)};
