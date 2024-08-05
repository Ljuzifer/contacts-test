import * as Yup from 'yup';

export const formSchema = Yup.object()
  .shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    firstName: Yup.string(),
    lastName: Yup.string(),
  })
  .test(
    'at-least-one',
    'Either first name or last name is required',
    function (value) {
      const { firstName, lastName } = value;
      if (!firstName && !lastName) {
        return this.createError({
          path: 'lastName',
          message: 'Either first name or last name is required',
        });
      }
      return true;
    },
  );
