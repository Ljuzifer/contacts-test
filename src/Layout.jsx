import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LoadingSpinnerComponent from 'react-spinners-components';
import AppBar from './components/AppBar';

export default function Layout() {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <LoadingSpinnerComponent
            type={'Gear'}
            color={'white'}
            size={'100px'}
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
