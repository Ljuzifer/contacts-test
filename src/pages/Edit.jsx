import { useLocation } from 'react-router-dom';

export default function Edit() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>edit contact</h1>
    </>
  );
}
