import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/fingerprint.svg';
import Home from '../assets/home.svg';

export default function AppBar() {
  return (
    <>
      <header className='container py-2'>
        <div className='mb-2 flex justify-between'>
          <Link
            to={'/'}
            className='flex items-center justify-center gap-2 hover:text-orange-700 focus:text-orange-700'
          >
            <Logo width={55} height={55} fill='currentColor' />
            <div className='flex flex-col'>
              <span>Contact`s</span>
              <span>Book</span>
            </div>
          </Link>
          <NavLink
            to={'/'}
            className='flex flex-col items-center justify-center hover:text-orange-700 focus:text-orange-700'
          >
            <Home width={28} height={28} fill='currentColor' />
            <span>home</span>
          </NavLink>
        </div>
        <hr className='mb-2' />
      </header>
    </>
  );
}
