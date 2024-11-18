// src/components/Admin/Cadastro.js
import React, { useState } from 'react';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    // Aqui vai a lógica de cadastro
    alert(`Usuário ${name} cadastrado com sucesso!`);
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleCadastro}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
