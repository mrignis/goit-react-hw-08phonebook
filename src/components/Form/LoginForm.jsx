// LoginForm.jsx
import React, { useState } from "react";
import * as Yup from "yup"; // Імпорт Yup для визначення схеми логіну

const LoginForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  // Визначення схеми логіну з використанням Yup
  const loginUserSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email address is required!")
      .email("You must enter a valid email address!"),
    password: Yup.string()
      .required("Password is required!")
      .min(7, "Your password must be at least 7 characters long!"),
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        minLength={7}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
