import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/fingerprint.svg';

export default function AppBar() {
  return (
    <header>
      <Link>
        <Logo />
        <b>Contact`s Book</b>
      </Link>
      <NavLink>Home</NavLink>
    </header>
  );
}
