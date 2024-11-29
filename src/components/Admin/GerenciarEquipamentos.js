import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const GerenciarEquipamentos = () => {
  const [equipamentos, setEquipamentos] = useState([
    {
      id: 1,
      nome: "Esteira",
      descricao: "Use a esteira para melhorar sua resistência cardiovascular.",
      imagem: "https://via.placeholder.com/150",
      linkYouTube: "https://youtube.com",
      tipo: "Cardio",
    },
    {
      id: 2,
      nome: "Bicicleta",
      descricao: "Bicicleta para treinos intensos de cardio.",
      imagem: "https://via.placeholder.com/150",
      linkYouTube: "https://youtube.com",
      tipo: "Cardio",
    },
    {
      id: 3,
      nome: "Supino",
      descricao: "Treino de força para o peitoral.",
      imagem: "https://via.placeholder.com/150",
      linkYouTube: "https://youtube.com",
      tipo: "Musculação",
    },
  ]);

  const [novoEquipamento, setNovoEquipamento] = useState({
    nome: "",
    descricao: "",
    imagem: "",
    linkYouTube: "",
    tipo: "Cardio",
  });

  const [editando, setEditando] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoEquipamento({ ...novoEquipamento, [name]: value });
  };

  const adicionarEquipamento = () => {
    if (!novoEquipamento.nome || !novoEquipamento.descricao || !novoEquipamento.imagem || !novoEquipamento.linkYouTube) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const novo = {
      ...novoEquipamento,
      id: Date.now(),
    };

    setEquipamentos([...equipamentos, novo]);
    setNovoEquipamento({ nome: "", descricao: "", imagem: "", linkYouTube: "", tipo: "Cardio" });
  };

  const excluirEquipamento = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este equipamento?")) {
      setEquipamentos(equipamentos.filter((equipamento) => equipamento.id !== id));
    }
  };

  const iniciarEdicao = (equipamento) => {
    setEditando(equipamento.id);
    setNovoEquipamento(equipamento);
  };

  const salvarEdicao = () => {
    setEquipamentos(
      equipamentos.map((equipamento) =>
        equipamento.id === editando ? novoEquipamento : equipamento
      )
    );
    setEditando(null);
    setNovoEquipamento({ nome: "", descricao: "", imagem: "", linkYouTube: "", tipo: "Cardio" });
  };

  const corPorTipo = (tipo) => {
    switch (tipo) {
      case "Cardio":
        return "#007bff";
      case "Musculação":
        return "#dc3545";
      default:
        return "#28a745";
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#007bff", marginBottom: "20px" }}>
        Gerenciar Equipamentos
      </h2>

      {/* Formulário para Adicionar/Editar Equipamento */}
      <div style={formStyle}>
        <h3>{editando ? "Editar Equipamento" : "Adicionar Novo Equipamento"}</h3>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={novoEquipamento.nome}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={novoEquipamento.descricao}
          onChange={handleInputChange}
          style={{ ...inputStyle, height: "100px" }}
        />
        <input
          type="text"
          name="imagem"
          placeholder="URL da Imagem"
          value={novoEquipamento.imagem}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="linkYouTube"
          placeholder="Link do YouTube"
          value={novoEquipamento.linkYouTube}
          onChange={handleInputChange}
          style={inputStyle}
        />
        <select
          name="tipo"
          value={novoEquipamento.tipo}
          onChange={handleInputChange}
          style={inputStyle}
        >
          <option value="Cardio">Cardio</option>
          <option value="Musculação">Musculação</option>
          <option value="Outro">Outro</option>
        </select>
        <button
          onClick={editando ? salvarEdicao : adicionarEquipamento}
          style={{
            ...buttonStyle,
            backgroundColor: editando ? "#ffc107" : "#007bff",
          }}
        >
          {editando ? "Salvar" : "Adicionar"}
        </button>
      </div>

      {/* Lista de Equipamentos */}
      <div style={equipamentosStyle}>
        {equipamentos.map((equipamento) => (
          <div
            key={equipamento.id}
            style={{
              ...cardStyle,
              borderLeft: `5px solid ${corPorTipo(equipamento.tipo)}`,
            }}
          >
            <img src={equipamento.imagem} alt={equipamento.nome} style={imageStyle} />
            <h4 style={{ marginBottom: "10px", color: corPorTipo(equipamento.tipo) }}>
              {equipamento.nome}
            </h4>
            <p style={{ color: "#666" }}>{equipamento.descricao}</p>
            <QRCodeCanvas value={JSON.stringify(equipamento)} size={100} style={{ margin: "10px auto" }} />
            <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
              <button
                onClick={() => iniciarEdicao(equipamento)}
                style={{ ...buttonStyle, backgroundColor: "#ffc107" }}
              >
                Editar
              </button>
              <button
                onClick={() => excluirEquipamento(equipamento.id)}
                style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const formStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
  margin: "0 auto 30px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
};

const equipamentosStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

const cardStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  width: "250px",
  textAlign: "center",
};

const imageStyle = {
  width: "100%",
  borderRadius: "8px",
  marginBottom: "15px",
};

export default GerenciarEquipamentos;
