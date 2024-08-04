import toast from 'react-hot-toast';
// import Spinner from '../components/Spinner';
// import { useGetAllContactsQuery } from '../redux/contacts/operations';
import { useEffect } from 'react';
import ContactsList from '../components/ContactsList';

export default function Home() {
  // const { data, error, isLoading } = useGetAllContactsQuery();
  // const contacts = data ? data.resources : [];

  useEffect(() => {
    // if (contacts.length > 0) {
    toast.success('Okay! Let`s see what we have...');
    // }
  }, []);

  return (
    <>
      {/* <div className='container'> */}
      {/* <ul>
          {error ? (
            <>{error.message}</>
          ) : isLoading ? (
            <Spinner />
          ) : contacts.length > 0 ? (
            contacts.map(i => {
              const emailField = i.fields.email;
              return emailField && emailField.length > 0 ? (
                <li key={i.id}>{emailField[0].value}</li>
              ) : (
                <li key={i.id}>No email available</li>
              );
            })
          ) : (
            <>No contacts found</>
          )}
        </ul> */}
      <ContactsList />
      {/* </div> */}
    </>
  );
}
