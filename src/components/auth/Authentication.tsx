"use client"; // Make sure this is added

import React, { useState } from "react";
import styled from "styled-components"; // Import styled-components

// Define the styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full height of the viewport
  background-color: #001f3f; // Dark blue background
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;

  label {
    color: white; // White label color
    margin-bottom: 5px; // Add spacing between label and input
  }

  input {
    margin-bottom: 10px; // Spacing between inputs
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
    background-color: white; // Background color for the button
    color: #001f3f; // Dark text color for contrast

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
`;

interface AuthenticationProps {
  onLogin: (email: string, password: string) => void;
}

const Authentication: React.FC<AuthenticationProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(email, password);
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
        
        <button type="submit" style={{ marginTop: "10px" }}>Login</button>
      </StyledForm>
    </Container>
  );
};

export default Authentication;
