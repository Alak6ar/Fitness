import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import VerifyEmail from "../components/auth/VerifyEmail";
import ForgetPassword from "../components/auth/ForgetPassword";
import ResetPassword from "../components/auth/ResetPassword";
import SubmitRegistration from "../components/auth/SubmitRegistration";
import ShoppingCart from "../components/ShoppingCart";
import Class from "../pages/Class";
import Trainer from "../pages/Trainer";

import { AuthProvider } from "../context/AuthContext";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/classes/:id" element={<Class />} />
          <Route path="/trainer/:id" element={<Trainer />} />
        </Route>
        <Route path="shopping-cart" element={<ShoppingCart />} />

        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="verifyEmail" element={<VerifyEmail />} />
          <Route path="forget-Password" element={<ForgetPassword />} />
          <Route path="submit-registration?*" element={<SubmitRegistration />} />
          <Route path="reset-password?*" element={<ResetPassword />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
