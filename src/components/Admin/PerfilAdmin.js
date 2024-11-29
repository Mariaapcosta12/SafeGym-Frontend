import React, { useState } from "react";

const PerfilAdmin = () => {
  const [adminData, setAdminData] = useState({
    nome: "Admin Name",
    email: "admin@safegym.com",
    telefone: "(00) 00000-0000",
    dataNascimento: "1990-01-01",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...adminData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    setAdminData(editedData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedData(adminData);
    setIsEditing(false);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#007bff" }}>Perfil do Administrador</h2>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <img
          src="https://via.placeholder.com/120"
          alt="Admin Avatar"
          style={{
            borderRadius: "50%",
            border: "2px solid #007bff",
            width: "120px",
            height: "120px",
          }}
        />
      </div>

      <div>
        {!isEditing ? (
          <>
            <ProfileField label="Nome" value={adminData.nome} />
            <ProfileField label="E-mail" value={adminData.email} />
            <ProfileField label="Telefone" value={adminData.telefone} />
            <ProfileField
              label="Data de Nascimento"
              value={new Date(adminData.dataNascimento).toLocaleDateString()}
            />
            <button
              style={editButtonStyle}
              onClick={() => setIsEditing(true)}
            >
              Editar Perfil
            </button>
          </>
        ) : (
          <>
            <EditableField
              label="Nome"
              name="nome"
              value={editedData.nome}
              onChange={handleInputChange}
            />
            <EditableField
              label="E-mail"
              name="email"
              type="email"
              value={editedData.email}
              onChange={handleInputChange}
            />
            <EditableField
              label="Telefone"
              name="telefone"
              type="tel"
              value={editedData.telefone}
              onChange={handleInputChange}
            />
            <EditableField
              label="Data de Nascimento"
              name="dataNascimento"
              type="date"
              value={editedData.dataNascimento}
              onChange={handleInputChange}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              <button
                style={{ ...editButtonStyle, backgroundColor: "#28a745" }}
                onClick={handleSave}
              >
                Salvar
              </button>
              <button
                style={{ ...editButtonStyle, backgroundColor: "#dc3545" }}
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div
    style={{
      marginBottom: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span
      style={{
        fontWeight: "bold",
        color: "#333",
      }}
    >
      {label}:
    </span>
    <span style={{ color: "#555" }}>{value}</span>
  </div>
);

const EditableField = ({ label, name, value, onChange, type = "text" }) => (
  <div
    style={{
      marginBottom: "15px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <label style={{ fontWeight: "bold", marginBottom: "5px", color: "#333" }}>
      {label}:
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        border: "1px solid #ced4da",
        borderRadius: "6px",
        fontSize: "16px",
      }}
    />
  </div>
);

const editButtonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "20px",
  transition: "background-color 0.3s",
};

export default PerfilAdmin;
