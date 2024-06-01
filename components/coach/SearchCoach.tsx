import TextInput from '@/components/ui/TextInput';
import debounce from '@/utils/debounce';
import { Platform, View } from 'react-native';

type Props = {
  onSearch: (text: string) => void;
}

const SearchCoach = ({ onSearch }: Props) => {
  const initiateSearch = debounce((text: string) => {
    onSearch(text);
  }, 500);

  return (
    <View className={`mb-4 rounded-lg shadow-md ${Platform.OS === 'android' ? 'shadow-black' : ''}`}>
      <TextInput
        placeholder="Search"
        onChangeText={initiateSearch}
      />
    </View>
  );
};

export default SearchCoach;