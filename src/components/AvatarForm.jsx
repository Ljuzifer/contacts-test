import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

import {
  useGetContactByIdQuery,
  useUpdateAvatarMutation,
} from '../redux/contacts/operations';

import { avatarSchema } from '../schema/avatarSchema';

export default function AvatarForm({ current }) {
  const { id, fields } = current;
  const [updateAvatar] = useUpdateAvatarMutation();
  const { refetch } = useGetContactByIdQuery(current.id);

  const initialState = { avatar: '' };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={avatarSchema}
      onSubmit={async (values, actions) => {
        const renewed = {
          contactId: id,
          avatar_url: values.avatar,
          is_important: true,
          ...fields,
        };

        try {
          await updateAvatar(renewed).unwrap();
          actions.resetForm();
          refetch();
          toast.success('Your avatar is added successfull!');
        } catch (error) {
          console.error(error.data.human_readable_error);
          toast.error(
            `Oops! It's an error: ${error.data.human_readable_error}`,
          );
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      <Form>
        <label htmlFor='avatar'>
          <Field
            id='avatar'
            type='text'
            name='avatar'
            placeholder='Enter your image URL'
          />
          <ErrorMessage name='avatar' component='strong' />
        </label>

        <button type='submit' className='button'>
          Add avatar
        </button>
      </Form>
    </Formik>
  );
}

AvatarForm.propTypes;
