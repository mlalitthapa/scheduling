import FAButton from '@/components/ui/buttons/FAButton';
import { render, screen } from 'expo-router/testing-library';
import { Text } from 'react-native';

test('Floating Action Button works', () => { 
  render(
    <FAButton>
      <Text>Book</Text>
    </FAButton>
  );

  const button = screen.getByRole('button', { name: 'Book' });

  expect(button).toBeOnTheScreen();
});