import React, { useState } from 'react';

const HistoricoManutencao = () => {
  // Exemplo de dados de manutenção
  const [manutencoes, setManutencoes] = useState([
    {
      id: 1,
      equipamento: 'Esteira',
      data: '2024-10-10',
      status: 'Concluída',
      detalhes: 'Troca de correia e lubrificação.',
    },
    {
      id: 2,
      equipamento: 'Bicicleta',
      data: '2024-10-12',
      status: 'Pendente',
      detalhes: 'Verificar resistência e pedais.',
    },
    {
      id: 3,
      equipamento: 'Leg Press',
      data: '2024-10-15',
      status: 'Concluída',
      detalhes: 'Ajuste de molas e revisão geral.',
    },
  ]);

  // Estado para controlar os dados do formulário de manutenção
  const [equipamento, setEquipamento] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [status, setStatus] = useState('Pendente');

  // Função para adicionar uma nova manutenção
  const handleAddManutencao = (e) => {
    e.preventDefault();

    if (equipamento && detalhes) {
      const novaManutencao = {
        id: manutencoes.length + 1,
        equipamento,
        data: new Date().toISOString().split('T')[0], // Data no formato YYYY-MM-DD
        status,
        detalhes,
      };

      setManutencoes([...manutencoes, novaManutencao]);
      setEquipamento('');
      setDetalhes('');
      setStatus('Pendente');
    }
  };

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
        Histórico de Manutenções
      </h2>

      {/* Formulário para adicionar nova manutenção */}
      <h3 style={{ color: '#007bff' }}>Adicionar Manutenção</h3>
      <form onSubmit={handleAddManutencao}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Equipamento</label>
          <input
            type="text"
            placeholder="Nome do equipamento"
            value={equipamento}
            onChange={(e) => setEquipamento(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ced4da',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Detalhes</label>
          <textarea
            placeholder="Descrição da manutenção"
            value={detalhes}
            onChange={(e) => setDetalhes(e.target.value)}
            required
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ced4da',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ced4da',
            }}
          >
            <option value="Pendente">Pendente</option>
            <option value="Concluída">Concluída</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Adicionar Manutenção
        </button>
      </form>

      <h3 style={{ marginTop: '30px', color: '#007bff' }}>Manutenções Realizadas</h3>
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
              Data
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
            <th
              style={{
                padding: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                textAlign: 'left',
              }}
            >
              Detalhes
            </th>
          </tr>
        </thead>
        <tbody>
          {manutencoes.map((manutencao) => (
            <tr key={manutencao.id}>
              <td style={{ padding: '10px' }}>{manutencao.equipamento}</td>
              <td style={{ padding: '10px' }}>{manutencao.data}</td>
              <td style={{ padding: '10px' }}>{manutencao.status}</td>
              <td style={{ padding: '10px' }}>{manutencao.detalhes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricoManutencao;
