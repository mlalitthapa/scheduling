import { useMutation, useQuery } from 'react-query';

import queryClient from '@/config/queryClient';
import { Booking } from '@/models/booking';
import * as bookingService from '@/services/booking.service';
import { Alert } from 'react-native';

const CACHE_KEYS = {
  BOOKINGS: 'BOOKINGS',
};

export const useBookings = () => {
  const { isLoading, data } = useQuery([CACHE_KEYS.BOOKINGS], () => {
    return bookingService.getBookings();
  }, {
    onError: () => {
      Alert.alert(
        'Sorry',
        'We were not able to fetch bookings at the moment. Please try again later.',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
      );
    },
  });

  const refresh = () => {
    queryClient.invalidateQueries([CACHE_KEYS.BOOKINGS]);
  };

  return {
    isLoading,
    refresh,
    bookings: data,
  };
};

export const useNewBooking = () => {
  const { isLoading: isBooking, mutate: create } = useMutation((booking: Booking) => {
    return bookingService.addNewBooking(booking);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([CACHE_KEYS.BOOKINGS]);
    },
    onError: () => {
      Alert.alert(
        'Sorry',
        'We were not able to confirm booking at the moment. Please try again later.',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
      );
    },
  });

  return {
    isBooking,
    create,
  };
};

export const useCancelBooking = () => {
  const { isLoading: isCancelling, mutate: cancel } = useMutation((booking: Booking) => {
    return bookingService.cancelBooking(booking);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([CACHE_KEYS.BOOKINGS]);
    },
    onError: () => {
      Alert.alert(
        'Sorry',
        'We were not able to cancel booking at the moment. Please try again later.',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
      );
    },
  });

  return {
    isCancelling,
    cancel,
  };
};