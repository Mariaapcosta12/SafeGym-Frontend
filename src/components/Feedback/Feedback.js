import React, { useState } from 'react';

const Feedback = () => {
  const [avaliacao, setAvaliacao] = useState(0); // Estado para armazenar a avaliação de 1 a 5
  const [comentario, setComentario] = useState(''); // Estado para armazenar o comentário
  const [sucesso, setSucesso] = useState(false); // Estado para mostrar mensagem de sucesso após envio

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode enviar os dados para uma API ou servidor para processar o feedback
    console.log('Avaliação:', avaliacao);
    console.log('Comentário:', comentario);

    // Simulação de sucesso no envio
    setSucesso(true);
    setAvaliacao(0);
    setComentario('');
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
        Feedback sobre Equipamento
      </h2>

      {/* Exibe mensagem de sucesso após envio */}
      {sucesso && (
        <div
          style={{
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#d4edda',
            color: '#155724',
            border: '1px solid #c3e6cb',
            borderRadius: '5px',
          }}
        >
          <strong>Feedback enviado com sucesso!</strong>
        </div>
      )}

      {/* Formulário de feedback */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px', marginBottom: '5px' }}>Avaliação (1 a 5):</label>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {[1, 2, 3, 4, 5].map((estrela) => (
              <button
                key={estrela}
                type="button"
                onClick={() => setAvaliacao(estrela)}
                style={{
                  backgroundColor: avaliacao >= estrela ? '#ffc107' : '#ddd',
                  border: 'none',
                  padding: '10px',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  margin: '0 5px',
                }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontSize: '16px', marginBottom: '5px' }}>Comentário:</label>
          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            rows="4"
            placeholder="Deixe seu comentário..."
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ced4da',
              fontSize: '14px',
              marginBottom: '10px',
            }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Enviar Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;  // Garantir exportação correta
