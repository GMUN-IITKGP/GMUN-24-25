import React, { useState } from "react";
import styles from "../styles/RegisterForm.module.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/users/register`, {
        fullName,
        email,
        password,
      });
      console.log(response);
      toast.success("User registered successfully");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        // If the response is in HTML format, extract the error message using regex
        const htmlContent = error.response.data;
        const regex = /Error: (.*?)<br>/;
        const match = htmlContent.match(regex);

        if (match && match[1]) {
          // The error message is captured in the first group
          console.log(match[1]);
          toast.error(`Error: ${match[1]}`);
        } else {
          // Fallback error message
          toast.error("An error occurred. Please try again.");
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
          <h2 className={styles.cardTitle}>Register for GMUN</h2>
          <p className={styles.cardDescription}>
            Create your account to join GMUN
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.cardContent}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName" className={styles.label}>
                fullName
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="fullName"
                  type="text"
                  className={styles.input}
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
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
              {isLoading ? "Registering..." : "Register"}
            </button>
            <p className={styles.loginText}>
              Already have an account?{" "}
              <Link to="/login" className={styles.loginLink}>
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
