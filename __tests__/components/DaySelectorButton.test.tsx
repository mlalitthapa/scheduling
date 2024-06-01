import DaySelectorButton from '@/components/booking/DaySelectorButton';
import { render, screen, userEvent } from '@testing-library/react-native';

describe('Day selector button', () => { 
  const onPress = jest.fn();
  const text = 'Monday';
  const testID = 'day-selector-button';

  beforeEach(() => {
    jest.useFakeTimers();
    
    render(
      <DaySelectorButton
        text={text}
        testID={testID}
        onPress={onPress}
      />,
    );
  });

  it('Should render the text correctly', () => {
    const day = screen.getByText(text);
    expect(day).toBeOnTheScreen();
  });

  it('should call provided function when pressed', async () => {
    const button = screen.getByTestId(testID);

    const user = userEvent.setup();
    await user.press(button);
    
    expect(onPress).toHaveBeenCalledTimes(1);
  });

});