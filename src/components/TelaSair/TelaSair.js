import React from "react";
import { useNavigate } from "react-router-dom";

const TelaSair = () => {
  const navigate = useNavigate();

  const handleConfirmar = () => {
    // Redirecionar para a página inicial ou logout
    navigate("/login");
  };

  const handleCancelar = () => {
    // Voltar para o dashboard ou página anterior
    navigate("/user-dashboard");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
          maxWidth: "400px",
        }}
      >
        <h2 style={{ color: "#dc3545", marginBottom: "20px" }}>Sair</h2>
        <p style={{ marginBottom: "20px" }}>
          Tem certeza de que deseja sair do sistema?
        </p>
        <div>
          <button
            onClick={handleConfirmar}
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              margin: "5px",
            }}
          >
            Confirmar
          </button>
          <button
            onClick={handleCancelar}
            style={{
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              margin: "5px",
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelaSair;
