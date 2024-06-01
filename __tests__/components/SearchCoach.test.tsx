import SearchCoach from '@/components/coach/SearchCoach';
import { render, screen, userEvent, waitFor } from '@testing-library/react-native';

const CHANGED_TEXT = 'John';

describe('Search input', () => {
  const onSearch = jest.fn();

  beforeEach(() => {
    render(<SearchCoach onSearch={onSearch} />);
  });

  it('should have an input element', () => {
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeOnTheScreen();
  });

  it('should call onSearch function with input after 500ms', async () => {
    const input = screen.getByPlaceholderText('Search');
    const user = userEvent.setup();
    jest.useFakeTimers();

    await user.type(input, CHANGED_TEXT);
    expect(onSearch).toHaveBeenCalledTimes(0);

    await waitFor(() => expect(onSearch).toHaveBeenCalledWith(CHANGED_TEXT), { timeout: 510 });
  });
});