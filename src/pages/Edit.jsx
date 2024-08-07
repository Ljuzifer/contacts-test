import { useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import ContactsProfile from '../components/ContactsProfile';
import Tags from '../components/Tags';
import TagsForm from '../components/TagsForm';
import AvatarForm from '../components/AvatarForm';
import Spinner from '../components/Spinner';

import { useGetContactByIdQuery } from '../redux/contacts/operations';
import toast from 'react-hot-toast';

export default function Edit() {
  const location = useLocation();
  const { contactId } = useParams();
  const backLocationRef = useRef(location.state?.from ?? '/');

  const { data, error, isLoading } = useGetContactByIdQuery(contactId);
  const profile = data ? data.resources[0] : {};
  const list = profile?.tags ?? [];

  useEffect(() => {
    toast.success('You`ve got it! :)');
    return () => toast.dismiss();
  }, []);

  return (
    <section>
      <div className='container'>
        <h1 className='title'>Contact`s profile</h1>
        {error ? (
          <>{error.message}</>
        ) : isLoading ? (
          <Spinner />
        ) : (
          <ContactsProfile profile={profile} />
        )}
        {list.length > 0 && (
          <>
            <h2 className='subtitle'>Tags</h2>
            <div className='mb-4 rounded-lg bg-[#3b3c3d] p-4'>
              <Tags id={contactId} tags={list} />
            </div>
          </>
        )}
        <TagsForm id={contactId} current={list} />
        <AvatarForm contactId={contactId} current={profile} />

        <Link to={backLocationRef.current.pathname}>
          <span className='mb-8 inline-block rounded-lg border-[2px] border-solid border-[#3b3c3d] px-3 py-1 text-center transition hover:bg-[#3b3c3d] focus:bg-[#3b3c3d]'>
            GO BACK
          </span>
        </Link>
      </div>
    </section>
  );
}
