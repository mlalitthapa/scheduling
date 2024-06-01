import DaySelector from '@/components/booking/DaySelector';
import DaySelectorButton from '@/components/booking/DaySelectorButton';
import SlotListFooter from '@/components/booking/SlotListFooter';
import SlotListHeader from '@/components/booking/SlotListHeader';
import SlotListItem from '@/components/booking/SlotListItem';
import theme from '@/config/theme';
import { useNewBooking } from '@/hooks/booking.hooks';
import { useAvailableTimes } from '@/hooks/coach.hooks';
import { Coach, DailySlots, SlotDuration } from '@/models/availability';
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

const BookCoach = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams<{coach: string}>();
  const coach = JSON.parse(params.coach || '{}') as Coach;

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { isBooking, create } = useNewBooking();
  const { selectedDay, setSelectedDay, availableSlots } = useAvailableTimes(coach);
  
  useEffect(() => {
    navigation.setOptions({ headerTitle: coach.name, statusBarColor: theme.colors.accent });
  }, [params, navigation]);

  const updateSelectedDay = (day: DailySlots) => {
    setSelectedDay(day);
    setIsModalVisible(false);
  };

  const bookingCreated = (time: SlotDuration) => {
    Alert.alert(
      'Booked',
      `Booked ${coach.name} for ${selectedDay.day_of_week} at ${time.startTime} - ${time.endTime}`,
      [
        {
          text: 'View appointments',
          onPress: () => {
            router.dismissAll();
          },
        },
        {
          text: 'Close',
          style: 'cancel',
        },
      ],
    );
  };

  const createNewBooking = (time: SlotDuration) => {
    create({
      coach: coach.name,
      timezone: coach.timezone,
      dayOfTheWeek: selectedDay.day_of_week,
      ...time,
    }, {
      onSuccess: () => bookingCreated(time),
    });
  };

  return (
    <View className='flex-1'>
      <FlatList
        className='pt-4 flex-1'
        data={selectedDay.slots || []}
        extraData={selectedDay.slots}
        keyExtractor={(item) => `${selectedDay.day_of_week}-${item.startTime}`}
        ListHeaderComponent={() => <SlotListHeader text={`All times are in ${coach.timezone} timezone`} />}
        ListFooterComponent={() => <SlotListFooter text='No more schedule for the day' />}
        renderItem={({ item }) => <SlotListItem item={item} onBook={createNewBooking} isBooking={isBooking} />}
        ItemSeparatorComponent={() => <View className='h-2' />}
      />

      <DaySelectorButton
        text={selectedDay?.day_of_week}
        onPress={() => setIsModalVisible(true)}
      />

      <DaySelector
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onDaySelected={updateSelectedDay}
        availableSlots={availableSlots}
      />
    </View>
  );
};

export default BookCoach;