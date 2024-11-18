import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Atualizar a importação

const BibliotecaEquipamentos = () => {
  // Estado com os equipamentos
  const [equipamentos] = useState([
    {
      id: 1,
      nome: 'Esteira',
      categoria: 'Cardio',
      imagem: 'https://via.placeholder.com/150', // Imagem do equipamento
      orientacao: 'Use a esteira para melhorar sua resistência cardiovascular. Mantenha uma postura reta e ajuste a velocidade conforme sua capacidade.',
      youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 2,
      nome: 'Bicicleta',
      categoria: 'Cardio',
      imagem: 'https://via.placeholder.com/150',
      orientacao: 'A bicicleta ergométrica é excelente para treinos de baixo impacto. Mantenha o ritmo constante e ajuste a resistência conforme necessário.',
      youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 3,
      nome: 'Supino',
      categoria: 'Musculação',
      imagem: 'https://via.placeholder.com/150',
      orientacao: 'O supino é ideal para trabalhar os músculos do peito. Certifique-se de ter um parceiro para garantir a segurança durante o exercício.',
      youtubeLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ]);

  // Estado para exibir o modal de detalhes
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState(null);

  // Função para abrir o modal com os detalhes do equipamento
  const handleEquipamentoClick = (equipamento) => {
    setEquipamentoSelecionado(equipamento);
  };

  // Função para fechar o modal de detalhes
  const handleCloseModal = () => {
    setEquipamentoSelecionado(null);
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '80px auto 60px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>
        Biblioteca de Equipamentos
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {equipamentos.map((equip) => (
          <div
            key={equip.id}
            style={{
              padding: '15px',
              marginBottom: '20px',
              width: '150px',
              textAlign: 'center',
              cursor: 'pointer',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            }}
            onClick={() => handleEquipamentoClick(equip)}
          >
            <img
              src={equip.imagem}
              alt={equip.nome}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '10px',
              }}
            />
            <h4>{equip.nome}</h4>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes */}
      {equipamentoSelecionado && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: '1000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '12px',
              width: '80%',
              maxWidth: '600px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
          >
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                padding: '8px 12px',
                cursor: 'pointer',
              }}
            >
              X
            </button>
            <h3>{equipamentoSelecionado.nome}</h3>
            <img
              src={equipamentoSelecionado.imagem}
              alt={equipamentoSelecionado.nome}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '15px',
              }}
            />
            <p><strong>Orientação de uso:</strong> {equipamentoSelecionado.orientacao}</p>
            <a
              href={equipamentoSelecionado.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                marginRight: '10px',
              }}
            >
              Assistir no YouTube
            </a>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <QRCodeCanvas value={equipamentoSelecionado.youtubeLink} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BibliotecaEquipamentos;
