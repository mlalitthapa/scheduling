import { Text, View } from 'react-native';

type Props = {
  text: string;
}

const SlotListFooter = ({ text }: Props) => {
  return (
    <View className='mb-6' >
      <Text className='text-base text-gray-500 text-center'>{text}</Text>
    </View>
  );
};

export default SlotListFooter;