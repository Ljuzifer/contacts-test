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
    <div className='notXl:container xl:sticky xl:top-5 xl:h-fit'>
      <div className='mdOnly:w-[440px] xl:w-[400px] notXl:mx-auto'>
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
          <Form>
            <label htmlFor='firstName'>
              First Name
              <Field
                id='firstName'
                type='text'
                name='firstName'
                placeholder='Enter contact`s first name'
              />
              <ErrorMessage name='firstName' component='strong' />
            </label>
            <label htmlFor='lastName'>
              Last Name
              <Field
                id='lastName'
                type='text'
                name='lastName'
                placeholder='Enter contact`s last name'
              />
              <ErrorMessage name='lastName' component='strong' />
            </label>
            <label htmlFor='email' className='mb-4'>
              Email
              <Field
                id='email'
                type='email'
                name='email'
                placeholder='Enter contact`s email'
              />
              <ErrorMessage name='email' component='strong' />
            </label>

            <button type='submit' className='button'>
              Add contact
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
