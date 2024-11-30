import React from "react";
import "../styles/LogoutBtn.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants.js";

function LogoutBtn() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/users/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(response);
      navigate("/landing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button class="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
