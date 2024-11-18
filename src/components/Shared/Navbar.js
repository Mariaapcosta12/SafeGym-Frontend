import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: '10px 0',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: '1000',
      }}
    >
      <Link
        to="/"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        Início
      </Link>
      <Link
        to="/biblioteca"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        Biblioteca
      </Link>
      <Link
        to="/perfil"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        Perfil
      </Link>
      <Link
        to="/notificacoes"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        Notificações
      </Link>
      <Link
        to="/relatorios"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        Relatórios
      </Link>
      <Link
        to="/feedback"
        style={{
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
      >
        Feedback
      </Link>
    </div>
  );
};

export default Navbar;
