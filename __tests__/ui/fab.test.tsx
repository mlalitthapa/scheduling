import FAButton from '@/components/ui/buttons/FAButton';
import { render, screen } from 'expo-router/testing-library';
import { Text } from 'react-native';

test('Floating Action Button works', () => { 
  render(
    <FAButton testID='book-button'>
      <Text>Book</Text>
    </FAButton>,
  );

  const button = screen.getByTestId('book-button');

  expect(button).toBeOnTheScreen();
  expect(button).toHaveTextContent('Book');
});