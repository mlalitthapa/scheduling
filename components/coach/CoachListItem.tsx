import { Coach } from '@/models/availability';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

type Props = {
  coach: Pick<Coach, 'name' | 'timezone'>;
}

const CoachListItem = ({ coach }: Props) => {
  const router = useRouter();

  const navigateToAvailability = () => {
    router.navigate({ pathname: 'coaches/book', params: { coach: JSON.stringify(coach) } });
  };

  return (
    <Pressable
      className='mb-4 flex-row bg-primary justify-between p-4 items-center rounded-lg'
      onPress={navigateToAvailability}
    >
      <View>
        <Text className='text-secondary text-xl font-semibold'>{coach.name}</Text>
        <Text className='text-secondary text-md font-bold opacity-80'>{coach.timezone}</Text>
      </View>
      <View className='bg-secondary h-14 w-14 rounded-full opacity-25' />
    </Pressable>
  );
};

export default CoachListItem;