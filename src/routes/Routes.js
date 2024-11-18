import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login'; // Importação padrão
import BibliotecaEquipamentos from '../components/BibliotecaEquipamentos/BibliotecaEquipamentos'; // Importação padrão
import PerfilUsuario from '../components/PerfilUsuario/PerfilUsuario'; // Importação padrão
import Notificacoes from '../components/Notificacoes/Notificacoes'; // Importação padrão
import Relatorios from '../components/Relatorios/Relatorios'; // Importação padrão
import Feedback from '../components/Feedback/Feedback'; // Importação padrão
import HistoricoManutencao from '../components/HistoricoManutencao/HistoricoManutencao'; // Importação da tela de Manutenção
import UserDashboard from '../components/UserDashboard/UserDashboard'; // Importação padrão
import AdminDashboard from '../components/AdminDashboard/AdminDashboard'; // Importação padrão
import Navbar from '../components/Shared/Navbar'; // Importação da Navbar

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Rota para o login */}
        <Route path="/biblioteca" element={<BibliotecaEquipamentos />} /> {/* Rota para a biblioteca de equipamentos */}
        <Route path="/perfil" element={<PerfilUsuario />} /> {/* Rota para o perfil do usuário */}
        <Route path="/notificacoes" element={<Notificacoes />} /> {/* Rota para notificações */}
        <Route path="/relatorios" element={<Relatorios />} /> {/* Rota para relatórios */}
        <Route path="/feedback" element={<Feedback />} /> {/* Rota para feedback */}
        <Route path="/historico-manutencao" element={<HistoricoManutencao />} /> {/* Rota para manutenção */}
        <Route path="/user-dashboard" element={<UserDashboard />} /> {/* Rota para o painel do usuário */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Rota para o painel do administrador */}
      </Routes>
      <Navbar /> {/* Navbar disponível em todas as rotas */}
    </Router>
  );
};

export default AppRoutes;
