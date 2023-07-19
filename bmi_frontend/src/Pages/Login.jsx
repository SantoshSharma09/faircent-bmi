import React, { useState } from "react";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AppContext } from "./AppContextProvider";

export default function Login() {
  const initialState = {
    email: "",
    password: "",
  };

  const [inputValue, setInputValue] = useState(initialState);
  const [todo, setTodo] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const { login, isAuth } = useContext(AppContext);

  const handleSubmit = () => {
    const { email, password } = inputValue;
    fetch("https://bored-cardigan-clam.cyclic.app/data/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle data
        console.log(data);
        localStorage.setItem("token_bmi", data.token);
        alert("Login Successfully");

        if (isAuth && !null) {
          return <Navigate to="/bmi" />;
        } else {
          <Navigate to="/" />;
        }
      })

      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h1>Login</h1>
      <div
        style={{ display: "grid", width: "40%", margin: "auto", gap: "10px" }}
      >
        <div>
          <label style={{ textAlign: "left" }}>Email : </label>
          <input
            required
            type="email"
            placeholder="Enter Email Here"
            onChange={handleChange}
            value={inputValue.email}
            name="email"
          />
        </div>
        <div>
          <label style={{ textAlign: "left" }}>Password : </label>
          <input
            required
            type="password"
            placeholder="Enter Password Here"
            onChange={handleChange}
            value={inputValue.password}
            name="password"
          />
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <div>
        <h1>New User</h1>
        <button onClick={handleSignup}>SignUp</button>
      </div>
    </div>
  );
}
