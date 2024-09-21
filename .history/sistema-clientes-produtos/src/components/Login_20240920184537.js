import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Página de Login</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
