import SecondaryButton from '@/components/ui/buttons/SecondaryButton';
import { render, screen } from '@testing-library/react-native';

const BUTTON_TEXT = 'Text';
const TEST_ID = 'secondary-button';

describe('Secondary button', () => {
  it('should render', () => {
    render(<SecondaryButton testID={TEST_ID} text={BUTTON_TEXT} />);
    
    const button = screen.getByTestId(TEST_ID);
    expect(button).toBeOnTheScreen();
    expect(button).toHaveTextContent(BUTTON_TEXT);
  });

  it('should have loading state', () => {
    render(<SecondaryButton testID={TEST_ID} text={BUTTON_TEXT} loading />);
    
    const button = screen.getByTestId(TEST_ID);
    expect(button).toBeOnTheScreen();
    
    const loader = screen.getByLabelText('Loading');
    expect(button).toContainElement(loader);
  });
});