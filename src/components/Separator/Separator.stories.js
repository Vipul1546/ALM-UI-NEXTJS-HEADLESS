import Separator from './Separator';

export default {
  title: 'Separator',
  component: Separator,
};

export const SimpleSeparator = () => (
  <>
    <Separator height={1} />
    <Separator height={2} separatorColor="red" />
    <Separator height={3} separatorColor="blue" marginTop={32} marginBottom={32} />
    <Separator height={4} separatorColor="green" />
  </>
);
