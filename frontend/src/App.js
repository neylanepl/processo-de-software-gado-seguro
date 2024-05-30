import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PrivateRoute from './pages/base/privateRoute.js';
import Inicio from './pages/inicio/inicio.js';

import CadastrarBovino from './pages/bovinos/cadastrarBovino.js';
import EditarBovino from './pages/bovinos/editarBovino.js';
import ListarBovino from './pages/bovinos/listarBovino.js';
import TelaListarCarteiraBovino from './pages/bovinos/telaListagemCarteira.js';
import CarteiraVacinacaoBovino from './pages/bovinos/carteiraVacinacao.js';

import CadastrarVacina from './pages/vacinas/cadastrarVacinas.js';
import EditarVacina from './pages/vacinas/editarVacinas.js';
import ListarVacina from './pages/vacinas/listarVacinas.js';

import CadastrarDose from './pages/dose/cadastrarDose.js';
import EditarDose from './pages/dose/editarDose.js';
import ListarDose from './pages/dose/listarDose.js';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute><Inicio /></PrivateRoute>} />

        <Route path="/bovinos" element={<PrivateRoute><ListarBovino /></PrivateRoute>} />
        <Route path="/bovinos/cadastrarBovino" element={<PrivateRoute><CadastrarBovino /></PrivateRoute>} />
        <Route path="/bovinos/editarBovino/:id" element={<PrivateRoute><EditarBovino /></PrivateRoute>} />
        <Route path="/bovinos/telaListagemCarteira" element={<TelaListarCarteiraBovino />} />
        <Route path="/bovinos/carteiraVacinacao" element={<CarteiraVacinacaoBovino />} />

        <Route path="/vacinas" element={<PrivateRoute><ListarVacina /></PrivateRoute>} />
        <Route path="/vacinas/cadastrarVacina" element={<PrivateRoute><CadastrarVacina /></PrivateRoute>} />
        <Route path="/vacinas/editarVacina/:nome_vacina" element={<PrivateRoute><EditarVacina /></PrivateRoute>} />

        <Route path="/doses" element={<PrivateRoute><ListarDose /></PrivateRoute>} />
        <Route path="/doses/cadastrarDose" element={<PrivateRoute><CadastrarDose /></PrivateRoute>} />
        <Route path="/doses/editarDose" element={<PrivateRoute><EditarDose /></PrivateRoute>} />

      </Routes>
      <ToastContainer />
    </Router>

  );
}

export default App;