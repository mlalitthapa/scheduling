import TextInput from '@/components/ui/TextInput';
import { render, screen, userEvent } from '@testing-library/react-native';

const PLACEHOLDER_TEXT = 'Search';
const CHANGED_TEXT = 'John';

describe('Text input', () => {
  it('should be on the screen', async () => {
    render(<TextInput placeholder={PLACEHOLDER_TEXT} />);
  
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    expect(input).toBeOnTheScreen();
  });

  it('Should apply the value typed by users', async () => {
    const onTextChange = jest.fn();
    render(<TextInput placeholder={PLACEHOLDER_TEXT} onChangeText={onTextChange} />);
  
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
  
    const user = userEvent.setup();
    await user.type(input, CHANGED_TEXT);
    expect(onTextChange).toHaveBeenCalledWith(CHANGED_TEXT);
  });
});