import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CronometroTreino = () => {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    let interval = null;
    if (ativo) {
      interval = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    } else if (!ativo && segundos !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [ativo, segundos]);

  const formatarTempo = (tempo) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h2 style={{ color: "#007bff" }}>Treino em andamento - Equipamento {id}</h2>
      <div
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          margin: "20px 0",
          color: "#333",
        }}
      >
        {formatarTempo(segundos)}
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => setAtivo(!ativo)}
          style={{
            padding: "10px 20px",
            backgroundColor: ativo ? "#dc3545" : "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {ativo ? "Pausar" : "Iniciar"}
        </button>
        <button
          onClick={() => setSegundos(0)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffc107",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Resetar
        </button>
      </div>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Voltar
      </button>
    </div>
  );
};

export default CronometroTreino;
