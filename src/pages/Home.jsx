import ContactsList from '../components/ContactsList';
import ContactsForm from '../components/ContactsForm';

export default function Home() {
  return (
    <section>
      <div className='xl:container'>
        <h1 className='title'>Contacts</h1>
        <div className='xl:flex-grow-1 xl:flex xl:h-full xl:gap-8'>
          <ContactsForm />
          <ContactsList />
        </div>
      </div>
    </section>
  );
}
