import { Stack } from 'expo-router';
import { QueryClientProvider } from 'react-query';

import queryClient from '@/config/queryClient';

const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerTitle: 'My Appointments', headerTitleAlign: 'center' }}
        />
      </Stack>
    </QueryClientProvider>
  );
};

export default AppLayout;