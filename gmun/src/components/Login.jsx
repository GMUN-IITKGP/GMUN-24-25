import React, { useState } from "react";
import styles from "../styles/LoginForm.module.css";
import { BASE_URL } from "../constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/users/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
          headers: {
            Accept: "application/json", // Explicitly set Accept header to JSON
          },
        }
      );
      console.log(response);
      toast.success("User logged in successfully");
      dispatch(login(response));
      navigate("/");
    } catch (error) {
      if (error.response) {
        const response = error.response.data;

        if (typeof response === "object") {
          // Handle JSON response
          const errorMessage =
            response.message || response.error || "Unknown error";
          toast.error(`Error: ${errorMessage}`);
        } else if (typeof response === "string") {
          // Attempt to parse HTML error message
          const regex = /Error: (.*?)<br>/;
          const match = response.match(regex);

          if (match && match[1]) {
            toast.error(`Error: ${match[1]}`);
          } else {
            toast.error("An error occurred. Please try again.");
          }
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>Login to GMUN</h2>
          <p className={styles.cardDescription}>
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.cardContent}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.passwordWrapper}>
                <div className={styles.inputWrapper}>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={styles.passwordToggle}
                  disabled={isLoading}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <button
              type="submit"
              className={`${styles.button} ${isLoading ? styles.loading : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
            <p className={styles.signupText}>
              Don't have an account?{" "}
              <Link to="/register" className={styles.signupLink}>
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
