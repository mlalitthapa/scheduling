import Appointments from '@/components/home/Appointments';
import BookAppointment from '@/components/home/BookAppointment';
import { renderRouter, screen } from 'expo-router/testing-library';
import { View } from 'react-native';

describe('Home page', () => {

  const AppointmentsScreen = jest.fn(() => (
    <View>
      <Appointments />
      <BookAppointment />
    </View>
  ));

  it('should render booking button', async () => {

    renderRouter({ index: AppointmentsScreen });

    const bookButton = screen.getByRole('button');
    expect(bookButton).toBeOnTheScreen();
  });

});