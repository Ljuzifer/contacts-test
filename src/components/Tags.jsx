import { useLocation } from 'react-router-dom';

import ButtonDel from './ButtonDel';
// import TagsForm from './TagsForm';

import {
  useGetContactByIdQuery,
  useUpdateTagsMutation,
} from '../redux/contacts/operations';

import toast from 'react-hot-toast';

export default function Tags({ id = '', tags = [] }) {
  const [deleteTag] = useUpdateTagsMutation();
  const { refetch } = useGetContactByIdQuery(id);
  const location = useLocation();
  const path = location.pathname === '/' ? true : false;

  const onDeleteTag = async tagId => {
    if (tags.length > 0) {
      const restTags = [];
      tags.map(t => t.id !== tagId && restTags.push(t.tag));
      const data = { contactId: id, tags: [...restTags] };

      try {
        await deleteTag(data).unwrap();
        refetch();
        toast.success('Your tag is deleted');
      } catch (error) {
        console.error(error.data.human_readable_error);
        toast.error(
          `Oops...! Failed to delete tag: ${error.data.human_readable_error}`,
        );
      }
    }
  };

  return (
    <>
      {tags.length > 0 && (
        <ul className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <li
              key={tag?.id || index}
              className='tags flex items-center justify-center rounded-[4px] bg-stone-900 px-1.5 py-1 text-sm font-light tracking-tight'
            >
              {tag.tag}
              {!path && <ButtonDel id={tag.id} onClick={onDeleteTag} />}
            </li>
          ))}
        </ul>
      )}
      {/* {!path && <TagsForm id={id} current={tags} />} */}
    </>
  );
}

Tags.propTypes;
