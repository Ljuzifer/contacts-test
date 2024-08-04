import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/fingerprint.svg';
import Home from '../assets/home.svg';

export default function AppBar() {
  return (
    <header className='container mx-auto flex justify-between py-2'>
      <Link className='flex items-center justify-center gap-2 hover:text-orange-700 focus:text-orange-700'>
        <Logo width={55} height={55} fill='currentColor' />
        <div className='flex flex-col'>
          <span>Contact`s</span>
          <span>Book</span>
        </div>
      </Link>
      <NavLink className='flex flex-col items-center justify-center hover:text-orange-800 focus:text-orange-700'>
        <Home width={28} height={28} fill='currentColor' />
        <span>home</span>
      </NavLink>
    </header>
  );
}
