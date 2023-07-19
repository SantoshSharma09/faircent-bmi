import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Bmi() {
  const initialValue = {
    height: "",
    weight: "",
  };

  const [inputValue, setInputValue] = useState(initialValue);
  const [bmi, setBmi] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleFind = () => {
    setBmi((+inputValue.weight * 10000) / (+inputValue.height) ** 2);
  };
  // const res = (+inputValue.weight * 10000) / (+inputValue.height) ** 2;
  // console.log(res);

  const handleLogout = () => {
    localStorage.removeItem("token_bmi");
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <div
        style={{
          display: "grid",
          width: "40%",
          gap: "10px",
          margin: "auto",
          marginTop: "110px",
        }}
      >
        <div>
          <label>Weight : </label>
          <input
            type="number"
            placeholder="Enter Height Here in cm"
            onChange={handleChange}
            name="weight"
            value={inputValue.weight}
          />
        </div>
        <div>
          <label>Height : </label>
          <input
            type="number"
            placeholder="Enter Height Here in cm"
            onChange={handleChange}
            name="height"
            value={inputValue.height}
          />
        </div>
      </div>
      <button onClick={handleFind}>Find</button>
      <div>
        <h2>Result</h2>
        <p>{bmi}</p>
      </div>
    </div>
  );
}
