import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        { email, password, confirmPassword, role: "Admin" },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setEmail("")
      setConfirmPassword("")
      setPassword("")
      navigateTo("/")
      toast.success(response.data.message)
      setIsAuthenticated(true)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <>
      <div className="container form-component">
        <img src="/logo.png" alt="" className='logo'/>
        <h1 className='form-title'>Welcome to wecare</h1>
        <p>Only admins are allowed to access these resource.</p>  
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="text"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
