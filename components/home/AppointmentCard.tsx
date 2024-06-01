import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { Booking } from '@/models/booking';
import { Text, View } from 'react-native';

type Props = {
  item: Booking
  onCancel: (booking: Booking) => void
  isCancelling?: boolean
}

const AppointmentCard = ({ item, onCancel, isCancelling }: Props) => {
  return (
    <View className="bg-primary p-4 rounded-md">
      <Text className="text-white text-xl font-semibold">{item.coach}</Text>
      <Text className="text-white text-lg">{item.dayOfTheWeek}</Text>
      <Text className='text-white text-base'>{item.startTime} - {item.endTime} ({item.timezone})</Text>
      <View className='mt-3 self-start'>
        <SecondaryButton text='Cancel' onPress={() => onCancel(item)} loading={isCancelling} />
      </View>
    </View>
  );
};

export default AppointmentCard;