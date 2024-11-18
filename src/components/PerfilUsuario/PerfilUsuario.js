import React, { useState } from 'react';

const PerfilUsuario = () => {
  const [usuario, setUsuario] = useState({
    nome: 'Maria Aparecida',
    email: 'maria@academia.com',
    telefone: '(11) 98765-4321',
    dataCadastro: '01/01/2023',
    foto: '', // Foto de perfil (pode ser alterada)
  });

  const [editando, setEditando] = useState(false);
  const [formData, setFormData] = useState(usuario);

  const handleEdit = () => {
    setEditando(true);
  };

  const handleCancel = () => {
    setFormData(usuario);
    setEditando(false);
  };

  const handleSave = () => {
    setUsuario(formData);
    setEditando(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '80px auto 60px', // Espaço para o menu inferior
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#007bff' }}>
        Perfil do Usuário
      </h2>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src={formData.foto || 'https://via.placeholder.com/150'}
          alt="Foto de perfil"
          style={{
            borderRadius: '50%',
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            border: '3px solid #007bff',
            marginBottom: '10px',
          }}
        />
        {editando && (
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              marginTop: '10px',
              border: 'none',
              padding: '5px',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          />
        )}
      </div>

      {editando ? (
        <div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da',
                marginBottom: '10px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da',
                marginBottom: '10px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Telefone</label>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da',
                marginBottom: '10px',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Data de Cadastro</label>
            <input
              type="text"
              name="dataCadastro"
              value={formData.dataCadastro}
              onChange={handleChange}
              disabled
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ced4da',
                marginBottom: '10px',
                backgroundColor: '#f8f9fa',
              }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleSave}
              style={{
                padding: '10px 20px',
                margin: '5px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Salvar
            </button>
            <button
              onClick={handleCancel}
              style={{
                padding: '10px 20px',
                margin: '5px',
                backgroundColor: '#6c757d',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      ) : (
        <div>
          <p>
            <strong>Nome:</strong> {usuario.nome}
          </p>
          <p>
            <strong>E-mail:</strong> {usuario.email}
          </p>
          <p>
            <strong>Telefone:</strong> {usuario.telefone}
          </p>
          <p>
            <strong>Data de Cadastro:</strong> {usuario.dataCadastro}
          </p>
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={handleEdit}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Editar Perfil
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerfilUsuario;
