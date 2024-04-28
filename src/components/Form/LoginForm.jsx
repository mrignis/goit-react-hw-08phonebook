import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";
import { Button, TextField } from "@mui/material"; // Імпорт компонентів Material-UI
import styles from "./LoginForm.module.css"; // Підключення CSS файлу

const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password must be at least 6 characters long"),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    actions.resetForm();
  };

  return (
    <div className={styles["login-form"]}>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Login User</h2>
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
              Login
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
