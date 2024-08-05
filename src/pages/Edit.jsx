import { useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Tags from '../components/Tags';

import {
  useGetAllContactsQuery,
  useGetContactByIdQuery,
} from '../redux/contacts/operations';

export default function Edit() {
  const location = useLocation();
  const { contactId } = useParams();
  const backLocationRef = useRef(location.state?.from ?? '/');

  const { refetch } = useGetAllContactsQuery();
  const { data } = useGetContactByIdQuery(contactId);
  const list = data ? data.resources[0]?.tags : [];
  console.log(list);

  console.log(location);
  console.log(backLocationRef);

  return (
    <section>
      <div className='container'>
        <h1 className='title'>edit contact</h1>
        <Tags id={contactId} tags={list} />
        <Link to={backLocationRef.current.pathname} onClick={() => refetch()}>
          <span className='inline-block rounded-lg border-[2px] border-solid border-[#3b3c3d] px-3 py-1 text-center transition hover:bg-[#3b3c3d] focus:bg-[#3b3c3d]'>
            GO BACK
          </span>
        </Link>
      </div>
    </section>
  );
}
