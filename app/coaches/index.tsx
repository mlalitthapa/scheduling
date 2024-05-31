import ScreenLayout from '@/components/ScreenLayout';
import CoachListItem from '@/components/coach/CoachListItem';
import NoCoaches from '@/components/coach/NoCoaches';
import SearchCoach from '@/components/coach/SearchCoach';
import { useCoaches } from '@/hooks/availability.hooks';
import { FlatList } from 'react-native';

const Coaches = () => {
  const {
    isLoading,
    coaches,
    refresh,
    setSearchText,
  } = useCoaches();

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  return (
    <ScreenLayout>
      <SearchCoach onSearch={handleSearch} />

      <FlatList
        data={coaches || []}
        renderItem={({ item }) => <CoachListItem coach={item} />}
        ListEmptyComponent={<NoCoaches />}
        refreshing={isLoading}
        onRefresh={refresh}
        className='h-full'
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </ScreenLayout>
  );
};

export default Coaches;