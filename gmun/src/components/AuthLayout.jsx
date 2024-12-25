import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout({ children }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStatus) {
      alert("Login is Required");
      navigate("/");
    }
  }, [authStatus, navigate]);

  return authStatus ? <>{children}</> : <div>Not Authorized User</div>;
}
