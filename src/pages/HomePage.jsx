import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import SectionHome from "../components/Form/SectionHome"; // Шлях до компонента SectionHome

const HomePage = () => {
  // Отримати стан аутентифікації зі зберігання
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Створіть стан для визначення, чи користувач аутентифікований
  const [authenticated, setAuthenticated] = useState(isLoggedIn);

  // Якщо користувач не аутентифікований, перенаправте його на іншу сторінку
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      {/* Секція "Home" */}
      <SectionHome />

      {/* Секція "Контакт лист" */}
      <h2>Контакт лист</h2>
      <p>Тут ваш контакт лист...</p>
    </div>
  );
};

export default HomePage;
