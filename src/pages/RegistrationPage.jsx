// RegistrationPage.jsx
import React from "react";
import RegistrationForm from "../components/Form/RegistrationForm"; // Переконайтеся, що правильний шлях до компонента
import { apiRegister } from "../redux/auth/operation";
const RegistrationPage = () => {
  const handleSubmit = (userData) => {
    // Виконуємо логіку для реєстрації користувача, наприклад, відправку даних на сервер
    console.log("User registration data:", userData);
    // Тут можна викликати функцію для відправлення даних на сервер або інші дії
  };

  return (
    <div>
      <h1>Registration Page</h1>
      <RegistrationForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RegistrationPage;
