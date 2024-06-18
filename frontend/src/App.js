import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
//import Inicio from './pages/inicio/inicio.js';

import CadastrarBovino from './pages/bovinos/cadastrarBovino.js';
//import EditarBovino from './pages/bovinos/editarBovino.js';
//import ListarBovino from './pages/bovinos/listarBovino.js';
//import TelaListarCarteiraBovino from './pages/bovinos/telaListagemCarteira.js';
//import CarteiraVacinacaoBovino from './pages/bovinos/carteiraVacinacao.js';

//import CadastrarVacina from './pages/vacinas/cadastrarVacinas.js';
//import EditarVacina from './pages/vacinas/editarVacinas.js';
//import ListarVacina from './pages/vacinas/listarVacinas.js';

//import CadastrarDose from './pages/dose/cadastrarDose.js';
//import EditarDose from './pages/dose/editarDose.js';
//import ListarDose from './pages/dose/listarDose.js';



function App() {
  return (

    <Router>
      <Routes>
        {/*<Route path="/" element={ <Inicio /> } />

        <Route path="/bovinos" element={ <ListarBovino /> } />*/}
        <Route path="/" element={ <CadastrarBovino /> } />
        {/*<Route path="/bovinos/editarBovino/:id" element={ <EditarBovino /> } />
        <Route path="/bovinos/telaListagemCarteira" element={<TelaListarCarteiraBovino />} />
        <Route path="/bovinos/carteiraVacinacao" element={<CarteiraVacinacaoBovino />} />

        <Route path="/vacinas" element={ <ListarVacina /> } />
        <Route path="/vacinas/cadastrarVacina" element={ <CadastrarVacina /> } />
        <Route path="/vacinas/editarVacina/:nome_vacina" element={ <EditarVacina /> } />

        <Route path="/doses" element={ <ListarDose /> } />
        <Route path="/doses/cadastrarDose" element={ <CadastrarDose /> } />
        <Route path="/doses/editarDose" element={ <EditarDose /> } />*/}

      </Routes>
      <ToastContainer />
    </Router>

  );
}

export default App;