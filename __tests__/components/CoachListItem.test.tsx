import CoachListItem from '@/components/coach/CoachListItem';
import { Coach } from '@/models/availability';
import { render, screen, userEvent } from '@testing-library/react-native';

const coach: Coach = {
  name: 'John',
  timezone: 'Australia/Sydney',
  availabilities: [
    {
      day_of_week: 'Monday',
      available_at: '9:00 am',
      available_until: '10:00 am',
    },
  ],
};

describe('Coach list item card', () => {
  const onPress = jest.fn();

  beforeEach(() => {
    render(<CoachListItem coach={coach} onPress={onPress} testId='coach-card' />);
  });

  it('should display coach name', () => {
    const coachName = screen.getByText(coach.name);
    expect(coachName).toBeOnTheScreen();
  });

  it('should display coach timezone', () => {
    const coachTimezone = screen.getByText(coach.timezone);
    expect(coachTimezone).toBeOnTheScreen();
  });

  it('should return coach info when pressed', async () => {
    const card = screen.getByTestId('coach-card');

    jest.useFakeTimers();

    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    await user.press(card);
    expect(onPress).toHaveBeenCalledWith(coach);
  });
});