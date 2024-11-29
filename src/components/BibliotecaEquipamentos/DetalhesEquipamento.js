import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

const equipamentos = [
  {
    id: 1,
    nome: "Esteira",
    categoria: "Cardio",
    imagem: "https://via.placeholder.com/150",
    orientacao:
      "Use a esteira para melhorar sua resistência cardiovascular. Mantenha uma postura reta e ajuste a velocidade conforme sua capacidade.",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    nome: "Bicicleta",
    categoria: "Cardio",
    imagem: "https://via.placeholder.com/150",
    orientacao:
      "A bicicleta ergométrica é excelente para treinos de baixo impacto. Mantenha o ritmo constante e ajuste a resistência conforme necessário.",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    nome: "Supino",
    categoria: "Musculação",
    imagem: "https://via.placeholder.com/150",
    orientacao:
      "O supino é ideal para trabalhar os músculos do peito. Certifique-se de ter um parceiro para garantir a segurança durante o exercício.",
    youtubeLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const DetalhesEquipamento = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Para navegação
  const equipamento = equipamentos.find((equip) => equip.id === parseInt(id));

  if (!equipamento) {
    return <p>Equipamento não encontrado</p>;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "20px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        {/* Botão para fechar o modal */}
        <button
          onClick={() => navigate(-1)} // Volta para a página anterior
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            color: "#007bff",
            border: "none",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          aria-label="Fechar"
        >
          ×
        </button>

        <h2 style={{ color: "#007bff", textAlign: "center" }}>
          {equipamento.nome}
        </h2>
        <img
          src={equipamento.imagem}
          alt={equipamento.nome}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />
        <p>
          <strong>Orientação de uso:</strong> {equipamento.orientacao}
        </p>
        <a
          href={equipamento.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            textAlign: "center",
            borderRadius: "5px",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          Assistir no YouTube
        </a>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <QRCodeCanvas value={equipamento.youtubeLink} />
        </div>

        {/* Botão para ir à página de Feedback */}
        <button
          onClick={() => navigate(`/biblioteca-equipamentos/${id}/feedback`)}
          style={{
            marginTop: "20px",
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            textAlign: "center",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Enviar Feedback
        </button>

        {/* Botão para iniciar o treino */}
        <button
          onClick={() => navigate(`/iniciar-treino/${id}`)}
          style={{
            marginTop: "10px",
            width: "100%",
            padding: "10px",
            backgroundColor: "#ff9900",
            color: "white",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Iniciar Treino
        </button>
      </div>
    </div>
  );
};

export default DetalhesEquipamento;
