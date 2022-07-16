import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import DataContextProvider from "./components/Context/DataContextProvider";
const App = () => {
  return (
    <div>
    <DataContextProvider>
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
      </DataContextProvider>
    </div>
  );
};

export default App;
