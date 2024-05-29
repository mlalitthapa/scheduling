import theme from '@/config/theme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

const NoAppointments = () => {
  return (
    <View className='items-center'>
      <MaterialIcons name='playlist-remove' size={48} color={theme.colors.primary} />
      <Text className='text-primary text-base font-semibold'>You do not have any appointments booked</Text>
    </View>
  );
};

export default NoAppointments;