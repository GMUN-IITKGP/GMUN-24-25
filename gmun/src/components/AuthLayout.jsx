import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthLayout({ children }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const getCurrentUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/profile`, {
        withCredentials: true,
      });
      console.log(response);
      setLoader(false);
    } catch (error) {
      navigate("/landing");
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return loader ? <h1>Loading....</h1> : <>{children}</>;
}
