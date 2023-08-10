import { Formik, Field, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

const phoneRegExp =
  '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}';
const nameRegExp =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegExp, 'Name is not valid')
    .required('A name is required'),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('A phone number is required'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        onAddContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field name="name" placeholder="Ввидите имя..." />
          <ErrorMessage name="name" component="div" />
        </label>

        <label>
          Number
          <Field name="number" placeholder="Ввидите номер..." />
          <ErrorMessage name="number" component="div" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
