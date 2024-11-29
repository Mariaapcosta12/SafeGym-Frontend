import React, { useState } from "react";

const FeedbackAdmin = () => {
  // Estado inicial com feedbacks simulados
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      equipamento: "Esteira",
      comentario: "Ótimo equipamento, mas poderia ser mais silencioso.",
      data: "2024-11-15",
      estrelas: 4,
    },
    {
      id: 2,
      equipamento: "Bicicleta Ergométrica",
      comentario: "Ajuste do banco não está funcionando bem.",
      data: "2024-11-20",
      estrelas: 3,
    },
    {
      id: 3,
      equipamento: "Supino",
      comentario: "Excelente! Muito estável e seguro.",
      data: "2024-11-22",
      estrelas: 5,
    },
  ]);

  // Estados para os filtros
  const [dataInicial, setDataInicial] = useState("");
  const [dataFinal, setDataFinal] = useState("");
  const [estrelasFiltro, setEstrelasFiltro] = useState("");

  // Função para filtrar os feedbacks
  const feedbacksFiltrados = feedbacks.filter((feedback) => {
    if (dataInicial && feedback.data < dataInicial) return false;
    if (dataFinal && feedback.data > dataFinal) return false;
    if (estrelasFiltro && feedback.estrelas.toString() !== estrelasFiltro) return false;
    return true;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "#007bff", marginBottom: "20px" }}>Feedbacks Recebidos</h2>

      {/* Filtros por Data e Estrelas */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          backgroundColor: "white",
          padding: "10px 15px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div>
          <label style={{ fontWeight: "bold" }}>Data Inicial:</label>
          <input
            type="date"
            value={dataInicial}
            onChange={(e) => setDataInicial(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Data Final:</label>
          <input
            type="date"
            value={dataFinal}
            onChange={(e) => setDataFinal(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ fontWeight: "bold" }}>Estrelas:</label>
          <select
            value={estrelasFiltro}
            onChange={(e) => setEstrelasFiltro(e.target.value)}
            style={inputStyle}
          >
            <option value="">Todas</option>
            <option value="5">5 Estrelas</option>
            <option value="4">4 Estrelas</option>
            <option value="3">3 Estrelas</option>
            <option value="2">2 Estrelas</option>
            <option value="1">1 Estrela</option>
          </select>
        </div>
      </div>

      {/* Lista de Feedbacks */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        {feedbacksFiltrados.length === 0 ? (
          <p style={{ textAlign: "center", color: "#6c757d" }}>
            Nenhum feedback encontrado para os filtros selecionados.
          </p>
        ) : (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {feedbacksFiltrados.map((feedback) => (
              <li
                key={feedback.id}
                style={{
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h4 style={{ margin: "0 0 10px 0", color: "#007bff" }}>
                  Equipamento: {feedback.equipamento}
                </h4>
                <p style={{ margin: "0 0 10px 0", color: "#333" }}>
                  <strong>Comentário:</strong> {feedback.comentario}
                </p>
                <p style={{ margin: "0 0 10px 0", color: "#333" }}>
                  <strong>Estrelas:</strong> {Array(feedback.estrelas).fill("⭐").join("")}
                </p>
                <p style={{ margin: 0, color: "#6c757d" }}>
                  <strong>Data:</strong> {new Date(feedback.data).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// Estilos reutilizáveis para os campos de entrada
const inputStyle = {
  width: "100%",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  marginTop: "5px",
};

export default FeedbackAdmin;
