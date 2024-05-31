import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform, Pressable, Text, View } from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
}

const DaySelectorButton = ({ text, onPress }: Props) => {
  return (
    <>
      <Pressable className='bg-accent p-4 items-center flex-row justify-center gap-x-4' onPress={onPress}>
        <Text className='text-white text-xl font-bold'>{text}</Text>
        <Ionicons name='chevron-up-circle' size={24} color={'white'} />
      </Pressable>
      {Platform.OS === 'ios' ? <View className='bg-accent h-4' /> : null}
    </>
  );
};

export default DaySelectorButton;