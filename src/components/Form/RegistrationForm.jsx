// RegistrationForm.jsx
import React, { useState } from "react";
import * as Yup from "yup"; // Імпорт Yup для визначення схеми реєстрації

const RegistrationForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  // Визначення схеми реєстрації з використанням Yup
  const registerUserSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required!")
      .max(50, `Your user name must be less than 50 characters!`),
    email: Yup.string()
      .required("Email address is required!")
      .email("You must enter a valid email address!"),
    password: Yup.string()
      .required("Password is required!")
      .min(7, `Your password must be at least 7 characters long!`),
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
        minLength={7}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
