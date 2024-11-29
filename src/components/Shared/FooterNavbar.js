import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaUser, FaBell } from "react-icons/fa";

const FooterNavbar = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        height: "60px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#007bff",
        boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <NavLink
        to="/user-dashboard"
        style={{
          color: "white",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        activeStyle={{
          color: "#ffc107",
        }}
      >
        <FaHome size={20} />
        <span style={{ fontSize: "12px" }}>Início</span>
      </NavLink>
      <NavLink
        to="/biblioteca-equipamentos"
        style={{
          color: "white",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        activeStyle={{
          color: "#ffc107",
        }}
      >
        <FaBook size={20} />
        <span style={{ fontSize: "12px" }}>Biblioteca</span>
      </NavLink>
      <NavLink
        to="/perfil"
        style={{
          color: "white",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        activeStyle={{
          color: "#ffc107",
        }}
      >
        <FaUser size={20} />
        <span style={{ fontSize: "12px" }}>Perfil</span>
      </NavLink>
      <NavLink
        to="/notificacoes"
        style={{
          color: "white",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        activeStyle={{
          color: "#ffc107",
        }}
      >
        <FaBell size={20} />
        <span style={{ fontSize: "12px" }}>Notificações</span>
      </NavLink>
    </div>
  );
};

export default FooterNavbar;
