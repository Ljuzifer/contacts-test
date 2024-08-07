import ContactsList from '../components/ContactsList';
import ContactsForm from '../components/ContactsForm';

export default function Home() {
  return (
    <>
      <h1 className='title'>Contacts</h1>
      <ContactsForm />
      <ContactsList />
    </>
  );
}
