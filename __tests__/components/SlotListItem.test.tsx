import SlotListItem from '@/components/booking/SlotListItem';
import { SlotDuration } from '@/models/availability';
import { render, screen, userEvent } from '@testing-library/react-native';

const slotItem: SlotDuration = {
  startTime: '9:00 am',
  endTime: '9:30 am',
};

describe('Slot item', () => {
  const onBook = jest.fn();

  beforeEach(() => {
    render(<SlotListItem item={slotItem} onBook={onBook} />);
  });

  it('should display start and end time', () => {
    const time = screen.getByText(`${slotItem.startTime} - ${slotItem.endTime}`);
    expect(time).toBeOnTheScreen();
  });

  it('should display book button', () => {
    const button = screen.getByLabelText('Book');
    expect(button).toBeOnTheScreen();
  });

  it('should return slot information when book button is pressed', async () => {
    jest.useFakeTimers();
    const button = screen.getByLabelText('Book');

    const user = userEvent.setup();
    await user.press(button);

    expect(onBook).toHaveBeenCalledWith(slotItem);
  });
});