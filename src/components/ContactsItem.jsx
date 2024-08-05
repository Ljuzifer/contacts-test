import { Link, useLocation } from 'react-router-dom';

import {
  useDeleteContactMutation,
  useGetAllContactsQuery,
} from '../redux/contacts/operations';

import Close from '../assets/close.svg';
import toast from 'react-hot-toast';

export default function ContactsItem({ item }) {
  const [deleteContact] = useDeleteContactMutation();
  const { refetch } = useGetAllContactsQuery();
  const location = useLocation();

  const { id, avatar_url, tags, fields } = item;
  const {
    email,
    ['first name']: firstName = '',
    ['last name']: lastName = '',
  } = fields;

  const mail = email[0]?.value ?? '';
  const name = firstName[0]?.value ?? '';
  const surname = lastName[0]?.value ?? '';

  // const handleClick = event => {
  //   if (event.target.closest('button')) {
  //     event.preventDefault();
  //   }
  // };

  const handleDelete = async (e, contactId) => {
    // e.stopPropagation();
    // e.preventDefault();
    try {
      await deleteContact(contactId);

      refetch();
    } catch (error) {
      console.error(error);
    } finally {
      toast.success('Contact deleted successfull!');
    }
  };

  return (
    <div className='group flex'>
      <Link
        to={`/${id}`}
        state={{ from: location }}
        // onClick={() => handleClick()}
        className='w-full'
      >
        <div className='flex rounded-lg rounded-tr-none bg-[#3b3c3d] p-4 group-hover:bg-[#1d1d1d]'>
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
        </div>
      </Link>
      <div className='h-11 w-11 rounded-r-lg bg-[#3b3c3d] p-0.5 hover:text-orange-700 focus:text-orange-700 group-hover:bg-[#1d1d1d]'>
        <button
          type='button'
          onClick={e => handleDelete(e, id)}
          // className='right-[2px] top-2 z-10 ml-auto flex items-start'
        >
          <Close width={40} height={40} fill='currentColor' />
        </button>
      </div>
    </div>
  );
}

ContactsItem.propTypes;
