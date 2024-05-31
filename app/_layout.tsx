import { Stack } from 'expo-router';
import { QueryClientProvider } from 'react-query';

import queryClient from '@/config/queryClient';
import theme from '@/config/theme';

const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ 
        headerTitleAlign: 'center',
        contentStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.secondary,
        statusBarColor: theme.colors.primary,
      }}>
        <Stack.Screen
          name="index"
          options={{ headerTitle: 'My Appointments' }}
        />
        <Stack.Screen
          name="coaches/index"
          options={{ headerTitle: 'Coaches' }}
        />
        <Stack.Screen
          name="coaches/book"
          options={{ headerTitle: '...' }}
        />
      </Stack>
    </QueryClientProvider>
  );
};

export default AppLayout;