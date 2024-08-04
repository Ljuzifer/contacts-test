import { Link, useLocation } from 'react-router-dom';

import Close from '../assets/close.svg';

export default function ContactsItem({ item }) {
  const location = useLocation();

  const { id, avatar_url, tags, fields } = item;
  const { email, ['first name']: firstName, ['last name']: lastName } = fields;

  const mail = email[0]?.value ?? '';
  const name = firstName[0]?.['first name'] ?? '';
  const surname = lastName[0]?.['last name'] ?? '';

  return (
    <Link to={`/${id}`} state={{ from: location }}>
      <div className='flex rounded-lg bg-[#3b3c3d] p-4 hover:bg-[#1d1d1d]'>
        <div className='mr-4 block h-[68px] w-[68px] overflow-hidden rounded-full'>
          <img
            src={avatar_url}
            alt='Contact`s avatar'
            width={68}
            height={68}
            content='object-cover'
          />
        </div>
        <div className='flex max-w-52 flex-col gap-5'>
          {name === '' && surname === '' ? (
            <p>No any name</p>
          ) : (
            <div className='flex gap-2'>
              <p>{name}</p>
              <p>{surname}</p>
            </div>
          )}

          {mail ? <b>{mail}</b> : <b>No email</b>}
          {tags.length > 0 && (
            <ul className='flex flex-wrap gap-2'>
              {tags.map(tag => (
                <li key={tag.id}>{tag.tag}</li>
              ))}
            </ul>
          )}
        </div>
        <button type='button' className='ml-auto flex items-start'>
          <Close width={40} height={40} fill='currentColor' />
        </button>
      </div>
    </Link>
  );
}

ContactsItem.propTypes;
