import React, { useState } from 'react';

const Notificacoes = () => {
  // Exemplo de notificações, em um caso real, essas informações seriam vindas de uma API
  const [notificacoes] = useState([
    { id: 1, tipo: 'alert', mensagem: 'Sua assinatura está prestes a expirar!' },
    { id: 2, tipo: 'info', mensagem: 'Novo equipamento adicionado à biblioteca.' },
    { id: 3, tipo: 'warning', mensagem: 'Seu último feedback foi registrado.' },
  ]);

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '80px auto 60px', // Espaço para o menu inferior
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>
        Notificações
      </h2>

      {/* Se não houver notificações */}
      {notificacoes.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            color: '#6c757d',
          }}
        >
          <p>Você não tem notificações no momento.</p>
        </div>
      ) : (
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {notificacoes.map((notificacao) => (
            <li
              key={notificacao.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor:
                  notificacao.tipo === 'alert'
                    ? '#f8d7da'
                    : notificacao.tipo === 'warning'
                    ? '#fff3cd'
                    : '#d1ecf1',
                borderRadius: '8px',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div>
                <strong style={{ color: '#007bff' }}>Notificação {notificacao.tipo.toUpperCase()}:</strong>
                <p style={{ margin: '5px 0', color: '#333' }}>{notificacao.mensagem}</p>
              </div>
              <button
                style={{
                  padding: '8px 15px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => alert(`Notificação ${notificacao.id} marcada como lida`)}
              >
                Marcar como lida
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notificacoes;
