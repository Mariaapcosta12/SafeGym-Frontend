import React from 'react';

const AdminDashboard = () => {
  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '1000px',
        margin: '80px auto',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#007bff' }}>Dashboard do Administrador</h2>
      <p>Bem-vindo ao painel de controle do administrador.</p>
      <p>Aqui você pode gerenciar usuários, equipamentos e muito mais.</p>
    </div>
  );
};

export default AdminDashboard;
