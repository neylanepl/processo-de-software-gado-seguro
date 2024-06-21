import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Inicio from './pages/inicio/inicio.js';

import CadastrarBovino from './pages/bovinos/cadastrarBovino.js';
import ListarBovinos from './pages/bovinos/listarBovinos.js';
//import TelaListarCarteiraBovino from './pages/bovinos/telaListagemCarteira.js';
//import CarteiraVacinacaoBovino from './pages/bovinos/carteiraVacinacao.js';

import CadastrarVacina from './pages/vacinacao/cadastrarVacina.js';
import ListarVacinas from './pages/vacinacao/listarVacinas.js';

//import CadastrarDose from './pages/dose/cadastrarDose.js';
//import ListarDose from './pages/dose/listarDose.js';



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={ <Inicio /> } />

        <Route path="/bovinos" element={ <ListarBovinos /> } />
        <Route path="/bovinos/cadastrarBovino/" element={ <CadastrarBovino /> } />
        {/*
        <Route path="/bovinos/telaListagemCarteira" element={<TelaListarCarteiraBovino />} />
        <Route path="/bovinos/carteiraVacinacao" element={<CarteiraVacinacaoBovino />} />*/}

        <Route path="/vacinas" element={ <ListarVacinas /> } />
        <Route path="/vacinacao/cadastrarVacina" element={ <CadastrarVacina /> } />
        
        {/*<Route path="/doses" element={ <ListarDose /> } />
        <Route path="/doses/cadastrarDose" element={ <CadastrarDose /> } />*/}

      </Routes>
      <ToastContainer />
    </Router>

  );
}

export default App;