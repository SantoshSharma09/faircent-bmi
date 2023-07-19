import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const initialState = {
    name: "",

    email: "",
    password: "",
  };

  const [inputValue, setInputValue] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    // console.log("value", inputValue);
    const { name, email, password } = inputValue;
    if (name == "" || email == "" || password == "") {
      alert("input required");
    } else {
      fetch(`https://bored-cardigan-clam.cyclic.app/data/register`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => navigate("/"));
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Signup</h1>
      <div
        style={{ display: "grid", width: "40%", margin: "auto", gap: "10px" }}
      >
        <div>
          <label style={{ textAlign: "left" }}>Name : </label>
          <input
            required
            type="text"
            placeholder="Enter Name Here"
            onChange={handleChange}
            value={inputValue.name}
            name="name"
          />
        </div>
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
        <h2>Already Registered</h2>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
