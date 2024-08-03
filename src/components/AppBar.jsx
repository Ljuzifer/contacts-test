import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/fingerprint.svg';

export default function AppBar() {
  return (
    <header className='container mx-auto flex justify-between'>
      <Link className='flex items-center justify-center gap-2'>
        <Logo width={55} height={55} />
        <div className='flex flex-col'>
          <span>Contact`s</span>
          <span>Book</span>
        </div>
      </Link>
      <NavLink>Home</NavLink>
    </header>
  );
}
