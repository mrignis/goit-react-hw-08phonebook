import React, { useState } from "react";
import { useSelector } from "react-redux";

import SectionHome from "../components/Form/SectionHome"; // Шлях до компонента SectionHome

const HomePage = () => {
  return (
    <div>
      {/* Секція "Home" */}
      <SectionHome />
    </div>
  );
};

export default HomePage;
