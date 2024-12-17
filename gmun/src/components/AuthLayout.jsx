import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthLayout({ children }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStatus) {
      navigate("/");
    }
  }, [authStatus, navigate]);

  return authStatus ? <>{children}</> : <div>Not Authorized User</div>;
}
