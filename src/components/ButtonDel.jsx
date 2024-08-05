import { clsx } from 'clsx';

import Close from '../assets/close.svg';
import { useLocation } from 'react-router-dom';

export default function ButtonDel({ id, onClick }) {
  const location = useLocation();
  const path = location.pathname === '/' ? true : false;

  return (
    <div
      className={clsx(
        'flex items-center justify-center hover:text-orange-700 focus:text-orange-700',
        path
          ? 'h-11 w-11 rounded-r-lg bg-[#3b3c3d] p-0.5 group-hover:bg-[#1d1d1d]'
          : 'p-0.1 ml-1 h-5 w-5',
      )}
    >
      <button type='button' onClick={() => onClick(id)}>
        <Close
          width={path ? 40 : 18}
          height={path ? 40 : 18}
          fill='currentColor'
        />
      </button>
    </div>
  );
}

ButtonDel.propTypes;
