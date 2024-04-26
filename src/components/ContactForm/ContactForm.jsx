import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { apiAddContact } from "../../redux/contacts/operations";
import styles from "./ContactForm.module.css";

const addNewContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  number: Yup.string().required("Phone number is required!"), // Змінено на 'number'
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiAddContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }} // Змінено на 'number'
        validationSchema={addNewContactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.formContainer}>
          <Field
            type="text"
            name="name"
            placeholder="Enter name"
            className={styles.input}
          />
          <ErrorMessage name="name" component="div" className={styles.error} />

          <Field
            type="text"
            name="number" // Змінено на 'number'
            placeholder="Enter phone number"
            className={styles.input}
          />
          <ErrorMessage
            name="number" // Змінено на 'number'
            component="div"
            className={styles.error}
          />

          <button type="submit" className={styles.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
