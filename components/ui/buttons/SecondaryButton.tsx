import { ActivityIndicator, Pressable, PressableProps, Text } from 'react-native';

interface Props extends Omit<PressableProps, 'children'> {
  text: string;
  loading?: boolean;
}

const SecondaryButton = ({ text, loading, ...props }: Props) => {
  return (
    <Pressable className='px-3 py-2 bg-secondary rounded-lg' disabled={loading} {...props}>
      {loading
        ? <ActivityIndicator />
        : <Text className='text-primary font-semibold'>{text}</Text>
      }
    </Pressable>
  );
};

export default SecondaryButton;