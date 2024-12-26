import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthLayout({ children }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStatus) {
      toast.error("You are not authorized to view this page");
      navigate("/");
    }
  }, [authStatus, navigate]);

  return authStatus ? <>{children}</> : <div>Not Authorized User</div>;
}
