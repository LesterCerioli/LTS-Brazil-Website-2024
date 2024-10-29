"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #001f3f;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;

  label {
    color: white;
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 10px;
  }

  button {
    text-transform: uppercase;
    padding: 12px 25px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 700;
    letter-spacing: 0.071em;
    font-size: 14px;
    transition: all ease-in-out 0.2s;
    background-color: white;
    color: #001f3f;

    &:hover {
      transform: scale(1.1);
    }
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    margin-top: 8px;

    label {
      margin-left: 4px;
      color: white;
    }
  }

  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
  }
`;

interface AuthenticationProps {
  onLogin: (email: string, password: string) => void;
}

const Authentication: React.FC<AuthenticationProps> = ({ onLogin }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (forgotPassword) {
      router.push("/auth/resetPassword"); // Redirect to the reset password page
    }
  }, [forgotPassword, router]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (email === "lesterlucasit@hotmail.com" && password === "1234") {
      onLogin(email, password);
      setErrorMessage("");
      router.push("/admin");
    } else {
      setErrorMessage("Email or password is incorrect.");
    }
  };

  return (
    <Container>
      <StyledForm onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label>Remember me</label>
        </div>
        
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={forgotPassword}
            onChange={() => setForgotPassword(!forgotPassword)}
          />
          <label>Forget my password</label>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit" style={{ marginTop: "10px" }}>Login</button>
      </StyledForm>
    </Container>
  );
};

export default Authentication;
