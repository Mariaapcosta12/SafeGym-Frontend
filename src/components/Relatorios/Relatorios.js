import React, { useState } from 'react';

const Relatorios = () => {
  // Exemplo de dados para relatório, esses dados podem ser dinâmicos, vindo de uma API
  const [relatorio] = useState({
    totalEquipamentos: 10,
    equipamentosEmManutencao: 2,
    equipamentosEmUso: 8,
    totalFeedbacks: 35,
    mediaFeedbacks: 4.5, // Média dos feedbacks
  });

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '80px auto 60px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>
        Relatórios de Equipamentos
      </h2>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#007bff' }}>Resumo Geral</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div
            style={{
              padding: '15px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h4>Total de Equipamentos</h4>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{relatorio.totalEquipamentos}</p>
          </div>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h4>Equipamentos em Manutenção</h4>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
              {relatorio.equipamentosEmManutencao}
            </p>
          </div>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h4>Equipamentos em Uso</h4>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{relatorio.equipamentosEmUso}</p>
          </div>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
            }}
          >
            <h4>Total de Feedbacks</h4>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{relatorio.totalFeedbacks}</p>
          </div>
        </div>
      </div>

      {/* Média de Feedbacks */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#007bff' }}>Média de Feedbacks</h3>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <h4>Média de Feedbacks</h4>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{relatorio.mediaFeedbacks}</p>
        </div>
      </div>

      {/* Histórico de Manutenções */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#007bff' }}>Histórico de Manutenções</h3>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  textAlign: 'left',
                }}
              >
                Equipamento
              </th>
              <th
                style={{
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  textAlign: 'left',
                }}
              >
                Data da Manutenção
              </th>
              <th
                style={{
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  textAlign: 'left',
                }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>Esteira</td>
              <td style={{ padding: '10px' }}>15/10/2024</td>
              <td style={{ padding: '10px' }}>Concluída</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Bicicleta</td>
              <td style={{ padding: '10px' }}>10/10/2024</td>
              <td style={{ padding: '10px' }}>Pendente</td>
            </tr>
            <tr>
              <td style={{ padding: '10px' }}>Leg Press</td>
              <td style={{ padding: '10px' }}>08/10/2024</td>
              <td style={{ padding: '10px' }}>Concluída</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Relatorios;
