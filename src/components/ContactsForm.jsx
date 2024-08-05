import { ErrorMessage, Field, Form, Formik } from 'formik';
import { formSchema } from '../schema/formSchema';
import toast from 'react-hot-toast';

import {
  useCreateContactMutation,
  useGetAllContactsQuery,
} from '../redux/contacts/operations';

export default function ContactsForm() {
  const [createContact] = useCreateContactMutation();
  const { refetch } = useGetAllContactsQuery();

  const initialState = { firstName: '', lastName: '', email: '' };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={formSchema}
      onSubmit={async (values, actions) => {
        const data = {
          record_type: 'person',
          fields: {
            ...(values.firstName && {
              'first name': [{ value: values.firstName }],
            }),
            ...(values.lastName && {
              'last name': [{ value: values.lastName }],
            }),
            email: [{ value: values.email }],
          },
        };

        try {
          await createContact({ ...data }).unwrap();
          actions.resetForm();

          toast.success('New contact is added successfull!');
          refetch();
        } catch (error) {
          console.error(error.data.human_readable_error);
          toast.error(
            `Oops...! Failed to create contact: ${error.data.human_readable_error}`,
          );
        } finally {
          actions.setSubmitting(false);
        }
      }}
    >
      <Form className='mx-auto flex max-w-80 flex-col gap-5'>
        <label className='flex flex-col'>
          First Name
          <Field type='text' name='firstName' />
          <ErrorMessage name='firstName' component='b' />
        </label>
        <label className='flex flex-col'>
          Last Name
          <Field type='text' name='lastName' />
          <ErrorMessage name='lastName' component='b' />
        </label>
        <label className='flex flex-col'>
          Email
          <Field type='email' name='email' />
          <ErrorMessage name='email' component={'b'} />
        </label>

        <button type='submit'>Add contact</button>
      </Form>
    </Formik>
  );
}
