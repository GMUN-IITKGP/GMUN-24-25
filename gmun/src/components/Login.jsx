import React, { useState } from "react";
import "../styles/Login.css";
import { BASE_URL } from "../constants.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.accessToken) {
        document.cookie = `accessToken=${data.accessToken}`;
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="login-box">
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <div class="user-box">
          <input
            required=""
            name=""
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input
            required=""
            name=""
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/register" class="a2">
          Sign up!
        </a>
      </p>
    </div>
  );
}

export default Login;
