import DaySelector from '@/components/booking/DaySelector';
import { DailySlots } from '@/models/availability';
import { render, screen, userEvent } from '@testing-library/react-native';

const dailySlot: DailySlots = {
  day_of_week: 'Monday',
  available_at: '9:00 am',
  available_until: '10:00 am',
  slots: [
    {
      startTime: '9:00 am',
      endTime: '10:00 am',
    },
  ],
};

const availableSlots = [dailySlot];

const TEST_ID = 'day-selector';

test('Modal should be hidden by default', () => {
  const onClose = jest.fn();
  const onDaySelected = jest.fn();
  
  render(
    <DaySelector
      isOpen={false}
      onClose={onClose}
      onDaySelected={onDaySelected}
      availableSlots={availableSlots}
      testID={TEST_ID}
    />,
  );

  const modal = screen.queryByTestId(TEST_ID);
  expect(modal).not.toBeOnTheScreen();
});

describe('Day selector modal', () => {

  const onClose = jest.fn();
  const onDaySelected = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();

    render(
      <DaySelector
        isOpen
        onClose={onClose}
        onDaySelected={onDaySelected}
        availableSlots={availableSlots}
        testID={TEST_ID}
      />,
    );
  });

  it('should be visible when open', () => {
    const modal = screen.queryByTestId(TEST_ID);
    expect(modal).toBeOnTheScreen();
  });

  it('should display weekdays and close button', () => {
    const day = screen.getByText(dailySlot.day_of_week);
    expect(day).toBeOnTheScreen();

    const closeButton = screen.getByLabelText('Close');
    expect(closeButton).toBeOnTheScreen();
  });

  it('should close modal when close button is pressed', async () => { 
    const user = userEvent.setup();
    const closeButton = screen.getByLabelText('Close');
    await user.press(closeButton);
    
    expect(onClose).toHaveBeenCalled();
  });

  it('should select the day when a day is pressed', async () => {
    const day = screen.getByText(dailySlot.day_of_week);

    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    await user.press(day);
    expect(onDaySelected).toHaveBeenCalledWith(dailySlot);
  });

});