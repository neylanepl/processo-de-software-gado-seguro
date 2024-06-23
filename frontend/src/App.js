import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import DashboardGeral from './pages/dashboard/dashboardGeral.js';
import DashboardVacinacao from './pages/dashboard/dashboardVacinacao.js';

import CadastrarBovino from './pages/bovinos/cadastrarBovino.js';
import ListarBovinos from './pages/bovinos/listarBovinos.js';

import CadastrarVacina from './pages/vacinacao/cadastrarVacina.js';
import ListarVacinas from './pages/vacinacao/listarVacinas.js';

import CadastrarAplicacao from './pages/aplicacao/cadastrarAplicacao.js';
import ListarCarteirasVacinacao from './pages/aplicacao/listarCarteirasVacinacao.js';
import CarteiraVacinacao from './pages/aplicacao/carteiraVacinacao.js';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={ <DashboardGeral /> } />
        <Route path="/dashboardVacinacao" element={ <DashboardVacinacao /> } />

        <Route path="/bovinos" element={ <ListarBovinos /> } />
        <Route path="/bovinos/cadastrarBovino/" element={ <CadastrarBovino /> } />

        <Route path="/vacinas" element={ <ListarVacinas /> } />
        <Route path="/vacinacao/cadastrarVacina" element={ <CadastrarVacina /> } />
        
        <Route path="/aplicacao/cadastrarAplicacao" element={ <CadastrarAplicacao /> } />
        <Route path="/aplicacao/listarCarteirasVacinacao" element={<ListarCarteirasVacinacao />} />
        <Route path="/aplicacao/carteiraVacinacao/:idBovino" element={<CarteiraVacinacao />} />

      </Routes>
      <ToastContainer />
    </Router>

  );
}

export default App;