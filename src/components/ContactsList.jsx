import { useEffect } from 'react';

import { useGetAllContactsQuery } from '../redux/contacts/operations';
import toast from 'react-hot-toast';

import ContactsItem from './ContactsItem';
import Spinner from './Spinner';

export default function ContactsList() {
  const { data, error, isLoading, refetch } = useGetAllContactsQuery();
  const list = data ? data.resources : [];

  useEffect(() => {
    refetch();
    toast.success('Okay! Let`s see what we have...');
    return () => toast.dismiss();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='mb-5'>
      <div className='container'>
        <ul className='flex flex-col gap-5'>
          {error ? (
            <>{error.message}</>
          ) : isLoading ? (
            <Spinner />
          ) : list.length > 0 ? (
            list.map(item => (
              <li key={item.id}>
                <ContactsItem item={item} />
              </li>
            ))
          ) : (
            <>No contacts found</>
          )}
        </ul>
      </div>
    </section>
  );
}
