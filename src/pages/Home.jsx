import { useEffect } from 'react';

import ContactsList from '../components/ContactsList';
import ContactsForm from '../components/ContactsForm';

import toast from 'react-hot-toast';

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
