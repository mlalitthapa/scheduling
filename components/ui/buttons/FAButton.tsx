import { Pressable, PressableProps } from 'react-native';

const FAButton = (props: PressableProps) => {
  return (
    <Pressable
      {...props}
      className='bg-accent self-start p-2 shadow-md shadow-[#00000050] rounded-full'
    />
  );
};

export default FAButton;