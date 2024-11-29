import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/images/gym-background.jpg'; // Imagem de fundo

const TelaInicial = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        color: 'white',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fundo mais escuro para contraste
          padding: '30px 20px',
          borderRadius: '15px',
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)',
          width: '90%', // Responsivo para telas menores
          maxWidth: '400px', // Máximo em telas maiores
        }}
      >
        <h1
          style={{
            fontSize: '28px', // Ajustado para dispositivos móveis
            fontWeight: 'bold',
            color: '#FFD700',
            marginBottom: '20px',
            textTransform: 'uppercase',
          }}
        >
          Bem-vindo ao SAFEGYM
        </h1>
        <p
          style={{
            fontSize: '16px', // Ajustado para dispositivos móveis
            lineHeight: '1.5',
            marginBottom: '25px',
          }}
        >
          Proporcione segurança e orientação no uso dos equipamentos da academia.
          <br />
          Acesse sua conta para gerenciar e visualizar os equipamentos disponíveis.
        </p>
        <Link
          to="/login"
          style={{
            display: 'inline-block',
            padding: '12px 20px',
            fontSize: '16px', // Ajustado para dispositivos móveis
            color: 'white',
            backgroundColor: '#007BFF',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            boxShadow: '0 4px 10px rgba(0, 123, 255, 0.5)', // Sombra azul
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#0056b3';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#007BFF';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Ir para Login
        </Link>
      </div>
    </div>
  );
};

export default TelaInicial;
