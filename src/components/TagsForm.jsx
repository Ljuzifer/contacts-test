import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

import {
  useGetContactByIdQuery,
  useUpdateTagsMutation,
} from '../redux/contacts/operations';

export default function TagsForm({ id, current }) {
  const [updateTags] = useUpdateTagsMutation();
  const { refetch } = useGetContactByIdQuery(id);

  const currentTags = [];
  if (current.length > 0) {
    current.map(tag => currentTags.push(tag.tag));
  }

  const initialState = { tags: '' };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={async (values, actions) => {
        const entered = values.tags.split(/[ ,.:;"'`]+/).filter(Boolean);
        const data = { contactId: id, tags: [...currentTags, ...entered] };

        try {
          await updateTags(data).unwrap();
          actions.resetForm();
          refetch();
          toast.success('Your tags added successfull!');
        } catch (error) {
          console.error(error.data.human_readable_error);
          toast.error(
            `Oops...! Failed to create tags: ${error.data.human_readable_error}`,
          );
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      <Form>
        <label htmlFor='tags'>
          <Field
            id='tags'
            type='text'
            name='tags'
            placeholder='Enter contact`s tags'
          />
          <ErrorMessage name='tags' component='strong' />
        </label>

        <button type='submit' className='button'>
          Add tags
        </button>
      </Form>
    </Formik>
  );
}

TagsForm.propTypes;
