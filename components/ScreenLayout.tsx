import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: ReactNode
}

const ScreenLayout = ({ children }: Props) => {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} className='pt-4 px-4'>
      {children}
    </SafeAreaView>
  );
};

export default ScreenLayout;