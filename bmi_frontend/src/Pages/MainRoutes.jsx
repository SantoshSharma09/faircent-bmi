import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Bmi from "./Bmi";
import PrivateRoute from "./PrivateRoute";

export default function MainRoutes() {
  const token = localStorage.getItem("token_bmi");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/bmi"
          element={
            <PrivateRoute>
              <Bmi />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}
