import { useGetAllContactsQuery } from '../redux/contacts/operations';
import ContactsItem from './ContactsItem';
import Spinner from './Spinner';

export default function ContactsList() {
  const { data, error, isLoading } = useGetAllContactsQuery();
  const list = data ? data.resources : [];
  console.log(list);

  return (
    <section>
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
