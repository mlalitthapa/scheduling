import { Coach } from '@/models/availability';
import { Pressable, Text, View } from 'react-native';

type Props = {
  coach: Coach;
  onPress: (coach: Coach) => void;
  testId?: string;
}

const CoachListItem = ({ coach, onPress, testId }: Props) => {
  return (
    <Pressable
      className='mb-4 flex-row bg-primary justify-between p-4 items-center rounded-lg'
      testID={testId}
      onPress={() => onPress(coach)}
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