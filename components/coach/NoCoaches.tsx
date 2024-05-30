import theme from '@/config/theme';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Text, View } from 'react-native';

const NoCoaches = () => {
  return (
    <View className='items-center justify-center flex-grow'>
      <SimpleLineIcons name='user-unfollow' size={48} color={theme.colors.primary} />
      <Text className='text-primary text-base font-semibold'>We could not find any available coaches</Text>
    </View>
  );
};

export default NoCoaches;