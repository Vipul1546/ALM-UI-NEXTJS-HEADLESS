import ProgressBar from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
};

export const ProgressBarVersion1 = () => (
  <>
    <ProgressBar bgcolor="orange" progress="30" height={30} />
    <ProgressBar bgcolor="red" progress="60" height={30} />
    <ProgressBar bgcolor="#99ff66" progress="50" height={30} />
    <ProgressBar bgcolor="#ff00ff" progress="85" height={30} />
    <ProgressBar bgcolor="#99ccff" progress="95" height={30} />
    <ProgressBar bgcolor="#000000" textColor="#ffffff" progress="55" height={20} />
  </>
);
