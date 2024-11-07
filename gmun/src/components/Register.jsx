import React, { useState } from "react";
import "../styles/Register.css";
import { BASE_URL } from "../constants.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/users/register`,
        {
          fullName,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /* From Uiverse.io by mi-series */
    <div class="container">
      <div class="form_area">
        <p class="title">SIGN UP</p>
        <form onSubmit={handleSubmit}>
          <div class="form_group">
            <label class="sub_title" for="name">
              Name
            </label>
            <input
              placeholder="Enter your full name"
              class="form_style"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div class="form_group">
            <label class="sub_title" for="email">
              Email
            </label>
            <input
              placeholder="Enter your email"
              id="email"
              class="form_style"
              type="email"
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
            <button class="btn" type="submit">
              SIGN UP
            </button>
            <p>
              Have an Account?{" "}
              <a class="link" href="/login">
                Login Here!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
