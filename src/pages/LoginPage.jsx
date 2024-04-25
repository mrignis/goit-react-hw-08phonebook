// LoginPage.jsx
import React from "react";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/Form/LoginForm";
import { apiLogin } from "../../redux/auth/operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    actions.resetForm();
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
