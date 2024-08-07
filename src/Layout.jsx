import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppBar from './components/AppBar';
import FooBar from './components/FooBar';
import Spinner from './components/Spinner';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <AppBar />

      <main className='flex-grow'>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </main>

      <FooBar />
    </div>
  );
}
