import React, { useState } from "react";
import "../styles/Register.css";
import { BASE_URL } from "../constants.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/users/login`,
        {
          password,
          email,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="container">
      <div class="form_area">
        <p class="title">LOGIN</p>
        <form onSubmit={handleSubmit}>
          <div class="form_group">
            <label class="sub_title" for="name">
              Email
            </label>
            <input
              placeholder="Enter your Email name"
              class="form_style"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form_group">
            <label class="sub_title" for="password">
              Password
            </label>
            <input
              placeholder="Enter your password"
              id="password"
              class="form_style"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button class="btnr" type="submit">
              Login
            </button>
            <p>
              Don't Have an Account?{" "}
              <a class="link" href="/register">
                Register Here!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
