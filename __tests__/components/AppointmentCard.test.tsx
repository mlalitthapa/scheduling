import AppointmentCard from '@/components/home/AppointmentCard';
import { Booking } from '@/models/booking';
import { render, screen, userEvent } from '@testing-library/react-native';

const appointment: Booking = {
  coach: 'John',
  timezone: 'Australia/Sydney',
  dayOfTheWeek: 'Monday',
  startTime: '9:00 am',
  endTime: '10:00 am',
};

describe('Each appointment card', () => {
  const onCancel = jest.fn();

  beforeEach(() => {
    render(<AppointmentCard item={appointment} onCancel={onCancel} />);
  });

  it('should display coach name', () => {
    const coachName = screen.getByText(appointment.coach);
    expect(coachName).toBeTruthy();
  });

  it('should display appointment date and time', () => {
    const day = screen.getByText(appointment.dayOfTheWeek);
    const time = screen.getByText(`${appointment.startTime} - ${appointment.endTime} (${appointment.timezone})`);
    
    expect(day).toBeTruthy();
    expect(time).toBeTruthy();
  });

  it('should have cancel button', () => {
    const button = screen.getByTestId('cancel-button');

    expect(button).toBeOnTheScreen();
    expect(button).toHaveTextContent('Cancel');
  });

  it('should call cancel function', async () => {
    const button = screen.getByTestId('cancel-button');
    jest.useFakeTimers();

    const user = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    await user.press(button);
    expect(onCancel).toHaveBeenCalledWith(appointment);
  });

});