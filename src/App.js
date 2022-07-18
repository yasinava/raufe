import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import DataContextProvider from "./components/Context/DataContextProvider";
import ShopContextProvider from "./components/Context/ShopContextProvider";
const App = () => {
  return (
    <div>
    <DataContextProvider>
      <ShopContextProvider>
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
      </ShopContextProvider>
      </DataContextProvider>
    </div>
  );
};

export default App;
