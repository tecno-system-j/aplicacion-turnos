
import React, { useState } from 'react';
import { login } from '../services/authService';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      if (data.role === 'admin') {
        history.push('/admin');
      } else {
        history.push('/dashboard');
      }
    } catch (err) {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <Typography variant="h4">Iniciar Sesión</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <form onSubmit={handleSubmit}>
        <TextField label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth />
        <TextField label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
        <Button type="submit" variant="contained" color="primary">Ingresar</Button>
      </form>
    </div>
  );
};

export default Login;
