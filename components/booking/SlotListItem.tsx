import { SlotDuration } from '@/models/availability';
import { Pressable, Text, View } from 'react-native';

type Props = {
  item: SlotDuration
}

const SlotListItem = ({ item }: Props) => {
  return (
    <View className='bg-primary p-4 flex-row justify-between items-center rounded-md mx-4'>
      <Text className='text-white text-lg'>{item.startTime} - {item.endTime}</Text>
      <Pressable className='bg-secondary py-1 px-2 rounded-lg'>
        <Text className='text-primary font-semibold'>Book</Text>
      </Pressable>
    </View>
  );
};

export default SlotListItem;