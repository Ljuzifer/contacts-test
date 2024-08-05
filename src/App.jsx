import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/Home'));
const EditPage = lazy(() => import('./pages/Edit'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/:contactId' element={<EditPage />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
}
