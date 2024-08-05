import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Edit() {
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');
  console.log(location);
  console.log(backLocationRef);

  return (
    <>
      <h1>edit contact</h1>
      <Link to={backLocationRef.current.pathname}>GO BACK</Link>
    </>
  );
}
