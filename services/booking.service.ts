import { Booking } from '@/models/booking';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKING_STORAGE_KEY = 'BOOKINGS';

export const getBookings = async (): Promise<Array<Booking>> => {
  const bookings = await AsyncStorage.getItem(BOOKING_STORAGE_KEY);

  return JSON.parse(bookings || '[]');
};

export const addNewBooking = async (booking: Booking): Promise<void> => {
  const bookings = await getBookings();

  // Check if booking already exists
  const existingBooking = bookings.find((b) =>
    b.dayOfTheWeek === booking.dayOfTheWeek &&
    b.startTime === booking.startTime &&
    b.coach === booking.coach,
  );
  if (existingBooking) {
    return;
  }

  const updatedBookings = [booking, ...bookings];
  await AsyncStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(updatedBookings));
};

export const cancelBooking = async (booking: Booking): Promise<void> => {
  const bookings = await getBookings();
  const newBookings = bookings.filter((b) => {
    if (b.coach !== booking.coach) {
      return true;
    } else if (b.dayOfTheWeek !== booking.dayOfTheWeek) {
      return true;
    } else if (b.startTime !== booking.startTime) {
      return true;
    }
    
    return false;
  });

  await AsyncStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(newBookings));
};