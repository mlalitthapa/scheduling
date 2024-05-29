import ScreenLayout from '@/components/ScreenLayout';
import Appointments from '@/components/home/Appointments';
import BookAppointment from '@/components/home/BookAppointment';

const Index = () => {
  return (
    <ScreenLayout>
      <Appointments />
      <BookAppointment />
    </ScreenLayout>
  );
};

export default Index;
