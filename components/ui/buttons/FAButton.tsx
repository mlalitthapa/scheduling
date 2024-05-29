import { Pressable, PressableProps } from 'react-native';

const FAButton = (props: PressableProps) => {
  return (
    <Pressable {...props} className='bg-accent self-start p-2 rounded-full' />
  );
};

export default FAButton;