import { Link, useLocation } from 'react-router-dom';

import Tags from './Tags';
import ButtonDel from './ButtonDel';

import {
  useDeleteContactMutation,
  useGetAllContactsQuery,
} from '../redux/contacts/operations';
import toast from 'react-hot-toast';

// import Close from '../assets/close.svg';

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

  const handleDelete = async contactId => {
    try {
      await deleteContact(contactId);
      refetch();
      toast.success('Contact deleted successfull!');
    } catch (error) {
      console.error(error);
      toast.error(
        `Oops...! Something wrong... Error: ${error.data.human_readable_error}`,
      );
    }
  };

  return (
    <div className='group flex'>
      <Link to={`/${id}`} state={{ from: location }} className='w-full'>
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

            <Tags id={id} tags={tags} />
          </div>
        </div>
      </Link>
      <ButtonDel id={id} onClick={handleDelete} />
    </div>
  );
}

ContactsItem.propTypes;
