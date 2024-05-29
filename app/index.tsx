
import ScreenLayout from '@/components/ScreenLayout';
import BookAppointment from '@/components/home/BookAppointment';
import NoAppointments from '@/components/home/NoAppointments';
import { FlatList, View } from 'react-native';

export default function Index() {
  return (
    <ScreenLayout>
      <FlatList
        data={[]}
        renderItem={() => <View className='w-full h-16' />}
        ListEmptyComponent={<NoAppointments />}
        className='h-full'
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
      />
      <BookAppointment />
    </ScreenLayout>
  );
}
