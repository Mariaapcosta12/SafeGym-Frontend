import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import welcomeImage from "../../assets/images/welcome.png"; // Corrige o caminho relativo

const AdminDashboard = () => {
  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", fontFamily: "Roboto, sans-serif" }}>
      {/* Menu Superior */}
      <header
        style={{
          backgroundColor: "#1a73e8", // Azul moderno
          color: "white",
          padding: "15px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h1 style={{ fontSize: "20px", margin: 0 }}>Admin - SAFEGYM</h1>
        <nav
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <NavItem to="/admin-dashboard/perfil" label="Perfil" isActive={location.pathname === "/admin-dashboard/perfil"} />
          <NavItem
            to="/admin-dashboard/gerenciar-usuarios"
            label="Usuários"
            isActive={location.pathname === "/admin-dashboard/gerenciar-usuarios"}
          />
          <NavItem
            to="/admin-dashboard/cadastrar-usuario"
            label="Novo Usuário"
            isActive={location.pathname === "/admin-dashboard/cadastrar-usuario"}
          />
          <NavItem
            to="/admin-dashboard/gerenciar-equipamentos"
            label="Equipamentos"
            isActive={location.pathname === "/admin-dashboard/gerenciar-equipamentos"}
          />
          <NavItem to="/admin-dashboard/relatorios" label="Relatórios" isActive={location.pathname === "/admin-dashboard/relatorios"} />
          <NavItem to="/admin-dashboard/feedback" label="Feedbacks" isActive={location.pathname === "/admin-dashboard/feedback"} />
          <NavItem
            to="/admin-dashboard/historico-manutencao"
            label="Manutenção"
            isActive={location.pathname === "/admin-dashboard/historico-manutencao"}
          />
          <NavItem to="/logout" label="Sair" isActive={location.pathname === "/logout"} color="#dc3545" />
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#f1f5f9", // Cinza claro para o fundo
          overflowY: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {location.pathname === "/admin-dashboard" ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={welcomeImage} // Usa a imagem importada
              alt="Bem-vindo ao Admin"
              style={{
                width: "100%",
                maxWidth: "600px",
                marginBottom: "20px",
                borderRadius: "10px",
              }}
            />
            <h2 style={{ color: "#007bff", fontSize: "24px", marginBottom: "10px" }}>
              Bem-vindo ao Painel Administrativo
            </h2>
            <p style={{ color: "#555", fontSize: "16px" }}>
              Gerencie usuários, equipamentos, relatórios e mais, diretamente neste painel.
            </p>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              width: "100%",
            }}
          >
            <Outlet />
          </div>
        )}
      </main>
    </div>
  );
};

const NavItem = ({ to, label, color = "white", isActive }) => (
  <Link
    to={to}
    style={{
      padding: "10px 15px",
      backgroundColor: isActive ? "rgba(255, 255, 255, 0.2)" : "transparent",
      color: color,
      textDecoration: "none",
      borderRadius: "5px",
      transition: "all 0.3s ease",
      fontWeight: "bold",
      fontSize: "14px",
      textAlign: "center",
      whiteSpace: "nowrap",
      boxShadow: isActive ? "0px 4px 10px rgba(0, 0, 0, 0.15)" : "none",
      transform: isActive ? "scale(1.1)" : "scale(1)",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.3)")}
    onMouseLeave={(e) => (e.target.style.backgroundColor = isActive ? "rgba(255, 255, 255, 0.2)" : "transparent")}
  >
    {label}
  </Link>
);

export default AdminDashboard;
