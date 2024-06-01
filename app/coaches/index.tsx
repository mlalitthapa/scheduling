import ScreenLayout from '@/components/ScreenLayout';
import CoachListItem from '@/components/coach/CoachListItem';
import NoCoaches from '@/components/coach/NoCoaches';
import SearchCoach from '@/components/coach/SearchCoach';
import { useCoaches } from '@/hooks/availability.hooks';
import { Coach } from '@/models/availability';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native';

const Coaches = () => {
  const {
    isLoading,
    coaches,
    refresh,
    setSearchText,
  } = useCoaches();

  const router = useRouter();

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const navigateToAvailability = (coach: Coach) => {
    router.navigate({ pathname: 'coaches/book', params: { coach: JSON.stringify(coach) } });
  };

  return (
    <ScreenLayout>
      <SearchCoach onSearch={handleSearch} />

      <FlatList
        data={coaches || []}
        renderItem={({ item }) => <CoachListItem coach={item} onPress={navigateToAvailability} />}
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