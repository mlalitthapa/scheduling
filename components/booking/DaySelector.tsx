import theme from '@/config/theme';
import { DailySlots } from '@/models/availability';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Modal, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onDaySelected: (day: DailySlots) => void;
  availableSlots: DailySlots[];
}

const DaySelector = ({ isOpen, onClose, onDaySelected, availableSlots }: Props) => {
  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      animationType='slide'
      transparent
    >
      <SafeAreaView className='flex-1 justify-end bg-[#00000080]'>
        <View className='bg-secondary px-4 pt-4 pb-6'>
          <View className='gap-y-3'>
            {availableSlots.map((day) => (
              <Pressable
                className='bg-primary p-4 rounded-lg'
                key={day.day_of_week}
                onPress={() => onDaySelected(day)}
              >
                <Text className='text-secondary text-lg font-semibold'>{day.day_of_week}</Text>
              </Pressable>
            ))}
          </View>

          <Pressable className='self-center mt-10' onPress={onClose}>
            <Ionicons name='close-circle' size={48} color={theme.colors.primary} />
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default DaySelector;