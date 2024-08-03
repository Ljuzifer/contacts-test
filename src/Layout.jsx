import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './components/AppBar';

import LoadingSpinnerComponent from 'react-spinners-components';

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
