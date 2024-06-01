import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { SlotDuration } from '@/models/availability';
import { Text, View } from 'react-native';

type Props = {
  item: SlotDuration
  onBook: (slot: SlotDuration) => void
  isBooking?: boolean
}

const SlotListItem = ({ item, onBook, isBooking }: Props) => {
  const onBookSlot = () => {
    if (!isBooking) onBook(item);
  };

  return (
    <View className='bg-primary p-4 flex-row justify-between items-center rounded-md mx-4'>
      <Text className='text-white text-lg'>{item.startTime} - {item.endTime}</Text>
      <SecondaryButton text='Book' disabled={isBooking} onPress={onBookSlot} />
    </View>
  );
};

export default SlotListItem;