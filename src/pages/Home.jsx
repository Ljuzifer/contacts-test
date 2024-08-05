import toast from 'react-hot-toast';
import { useEffect } from 'react';
import ContactsList from '../components/ContactsList';
import ContactsForm from '../components/ContactsForm';

export default function Home() {
  useEffect(() => {
    toast.success('Okay! Let`s see what we have...');
    return () => toast.dismiss();
  }, []);

  return (
    <>
      <ContactsForm />
      <ContactsList />
    </>
  );
}
