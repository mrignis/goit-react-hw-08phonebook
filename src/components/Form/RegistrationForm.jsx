import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { apiRegister } from "../../redux/auth/operations";
import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from "../../utilits/constans";
import "./RegistrationForm.css"; // Підключаємо CSS файл

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} characters!`
    ),
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter a valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Your password must be greater than ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
    ),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("FormData: ", values); // Додаємо лог перед надсиланням на сервер
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
    <div className="registration-form">
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={registerUserSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Register user</h2>
          <label>
            <span>Email:</span>
            <br />
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage component="p" name="email" />
          </label>{" "}
          <br />
          <label>
            <span>Name:</span>
            <br />
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage component="p" name="name" />
          </label>
          <br />
          <label>
            <span>Password:</span>
            <br />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage component="p" name="password" />
          </label>
          <br />
          <button type="submit">▶ Create new user</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
