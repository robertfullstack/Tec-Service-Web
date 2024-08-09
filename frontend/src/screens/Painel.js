import React, { useState } from "react";
import axios from "axios";
import '../styles/Painel.scss';

const Painel = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      console.log(response.data);
      setSuccess('Login realizado com sucesso!');
      setError('');
    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
      setSuccess('');
    }
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', { name, email, password });
      console.log(response.data);
      setSuccess('Registro realizado com sucesso!');
      setError('');
    } catch (error) {
      setError('Erro ao registrar. Tente novamente.');
      setSuccess('');
    }
  };
  

  return (
    <div className="painel-container" style={{marginTop: '200px'}}>
      <div className="form-toggle">
        <button onClick={handleToggleForm} className={isLogin ? "active" : ""}>Login</button>
        <button onClick={handleToggleForm} className={!isLogin ? "active" : ""}>Registro</button>
      </div>
      
      {isLogin ? (
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="btn-submit">Entrar</button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </form>
      ) : (
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Registro</h2>
          <input 
            type="text" 
            name="name" 
            placeholder="Nome" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="btn-submit">Registrar</button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </form>
      )}
    </div>
  );
};

export default Painel;
