import NoAppointments from '@/components/home/NoAppointments';
import { FlatList, View } from 'react-native';

const Appointments = () => {
  return (
    <FlatList
      data={[]}
      renderItem={() => <View className='w-full h-16' />}
      ListEmptyComponent={<NoAppointments />}
      className='flex-1'
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
};

export default Appointments;