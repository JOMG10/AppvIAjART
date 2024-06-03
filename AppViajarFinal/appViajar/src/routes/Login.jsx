import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../routes/Login.css';
import logo from '../assets/logo1.png'

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Techventory Logo" className="logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
        <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
        <button className="create-account" onClick={() => window.location.href='/register'}>Crear cuenta nueva</button>
      </div>
    </div>
  );
};
