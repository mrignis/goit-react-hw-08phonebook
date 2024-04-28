import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import { Button, TextField } from "@mui/material"; // Імпорт компонентів Material-UI
import styles from "./RegistrationForm.module.css"; // Підключення CSS файлу

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(30, "Name must be 30 characters or less"),
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter a valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password must be at least 6 characters long"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
    <div className={styles["registration-form"]}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={registerUserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Register User</h2>
          <div>
            <Field
              as={TextField}
              type="text"
              name="name"
              label="Name"
              variant="outlined"
              margin="normal"
              placeholder="Enter your name"
            />
            <ErrorMessage component="p" name="name" />
          </div>
          <div>
            <Field
              as={TextField}
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              placeholder="Enter your email"
            />
            <ErrorMessage component="p" name="email" />
          </div>
          <div>
            <Field
              as={TextField}
              type="password"
              name="password"
              label="Password"
              variant="outlined"
              margin="normal"
              placeholder="Enter your password"
            />
            <ErrorMessage component="p" name="password" />
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
