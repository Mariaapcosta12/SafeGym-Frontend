import React, { useState } from 'react';

const RecuperacaoSenha = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio de e-mail
    if (email) {
      setMensagem('Um link para redefinição de senha foi enviado para o seu e-mail.');
    } else {
      setMensagem('Por favor, insira um endereço de e-mail válido.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f7f7f7',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '20px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>
          Recuperação de Senha
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              E-mail:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Enviar
          </button>
        </form>
        {mensagem && (
          <p
            style={{
              marginTop: '20px',
              textAlign: 'center',
              color: mensagem.includes('enviado') ? 'green' : 'red',
            }}
          >
            {mensagem}
          </p>
        )}
      </div>
    </div>
  );
};

export default RecuperacaoSenha;
