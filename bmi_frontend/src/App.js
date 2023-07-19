import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import MainRoutes from "./Pages/MainRoutes";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Bmi from "./Pages/Bmi";

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
