import { TextInput as RNInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {}

const TextInput = (props: Props) => {
  return (
    <RNInput
      className='bg-white p-4 text-base border border-gray-200 placeholder-black'
      placeholderTextColor='#5e69ee'
      {...props}
    />
  );
};

export default TextInput;