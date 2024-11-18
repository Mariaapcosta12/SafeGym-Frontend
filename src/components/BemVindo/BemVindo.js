import React from "react";
import { Link } from "react-router-dom";
import "./BemVindo.css";

const BemVindo = () => {
  return (
    <div className="bem-vindo-container">
      <div className="card">
        <h1>Bem-vindo ao SafeGym!</h1>
        <p>
          Gerencie seus equipamentos e funcionalidades de academia com segurança
          e facilidade.
        </p>
        <Link to="/login" className="btn btn-primary">
          Acessar Login
        </Link>
      </div>
    </div>
  );
};

export default BemVindo;
