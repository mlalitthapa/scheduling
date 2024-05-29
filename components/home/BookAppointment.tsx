import FAButton from '@/components/ui/buttons/FAButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { View } from 'react-native';

const BookAppointment = () => {
  const router = useRouter();

  const browsePros = () => {
    router.navigate('coaches');
  };

  return (
    <View className='absolute bottom-14 right-8'>
      <FAButton onPress={browsePros}>
        <Ionicons name='add-circle-outline' size={48} color='white' />
      </FAButton>
    </View>
  );
};

export default BookAppointment;