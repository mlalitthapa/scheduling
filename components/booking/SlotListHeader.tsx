import { Text, View } from 'react-native';

type Props = {
  text: string
}

const SlotListHeader = ({ text }: Props) => {
  return (
    <View className='mb-3'>
      <Text className='text-base text-gray-500 text-center'>{text}</Text>
    </View>
  );
};

export default SlotListHeader;