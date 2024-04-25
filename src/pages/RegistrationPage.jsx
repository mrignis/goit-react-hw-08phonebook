import React from "react";
import { useDispatch } from "react-redux"; // Додайте імпорт useDispatch
import RegistrationForm from "../components/Form/RegistrationForm";
import { apiRegister } from "../redux/auth/operation";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
