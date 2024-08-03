import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './components/AppBar';
import Spinner from './components/Spinner';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
