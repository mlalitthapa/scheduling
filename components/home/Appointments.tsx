import AppointmentCard from '@/components/home/AppointmentCard';
import NoAppointments from '@/components/home/NoAppointments';
import { useBookings, useCancelBooking } from '@/hooks/booking.hooks';
import { Booking } from '@/models/booking';
import { FlatList } from 'react-native';

const Appointments = () => {
  const { isLoading, bookings, refresh } = useBookings();
  const { isCancelling, cancel } = useCancelBooking();
  
  const cancelBooking = (booking: Booking) => {
    cancel(booking);
  };

  return (
    <FlatList
      data={bookings}
      extraData={bookings}
      keyExtractor={(item) => `${item.coach}-${item.dayOfTheWeek}-${item.startTime}`}
      renderItem={({ item }) => (
        <AppointmentCard
          item={item}
          onCancel={cancelBooking}
          isCancelling={isCancelling}
        />
      )}
      ListEmptyComponent={<NoAppointments />}
      className='flex-1'
      refreshing={isLoading}
      onRefresh={refresh}
      contentContainerStyle={{ flexGrow: 1, gap: 16 }}
    />
  );
};

export default Appointments;