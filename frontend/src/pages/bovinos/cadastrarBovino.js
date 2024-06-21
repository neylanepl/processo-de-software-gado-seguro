import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
//import gadoSeguro from '../../services/connectionGadoSeguro';

import Base from '../base/base';
import BotoesCadastrarVoltar from '../../components/butoesCadastrarVoltar';


const CadastrarBovino = () => {
    
    const [fazendas, setFazendas] = useState([]);

    useEffect(() => {
        const fetchFazendas = async () => {
            try {
                //const response = await gadoSeguro.get('/fazenda');
                //setFazendas(response.data);
            } catch (error) {
                console.error("erro ao listar fazendas: ", error);
            }
        };

        fetchFazendas();
    }, []);

    const [vacas, setVacas] = useState([]);

    useEffect(() => {
        const fetchVacas = async () => {
            try {
                //const vas = await gadoSeguro.get('/vaca');
                //setVacas(vas.data);
            } catch (error) {
                console.error("erro ao listar vacas: ", error);
            }
        };

        fetchVacas();
    }, []);

    const [bois, setBois] = useState([]);
    useEffect(() => {
      const fetchBois = async () => {
          try {
              //const b = await gadoSeguro.get('/boi');
              //setBois(b.data);
          } catch (error) {
              console.error("erro ao listar bois: ", error);
          }
      };

      fetchBois();
  }, []);

  const [idFazendaForm, setIdFazendaForm] = useState(0);
  const [idVacaForm, setIdVacaForm] = useState(0);
  const [idBoiForm, setIdBoiForm] = useState(0);
  const [idBovinoForm, setIdBovinoForm] = useState(0);
  const [nomeForm, setNomeForm] = useState('');
  const [pesoForm, setPesoForm] = useState(0);
  const [dataForm, setDataForm] = useState('');
  const [sexoForm, setSexoForm] = useState('');
  const [reprodutorForm, setReprodutorForm] = useState('');
  const [corForm, setCorForm] = useState('');
  const [chifreForm, setChifreForm] = useState(false);
  const [racaForm, setRacaForm] = useState('');
  const [exibirInputsFemea, setExibirInputsFemea] = useState(false);
  const [producaoLeiteForm, setProducaoLeiteForm] = useState('');
  const [gravidaForm, setGravidaForm] = useState('');
  const [dandoLeiteForm, setDandoLeiteForm] = useState('');
  const [exibirInputsGestacao, setExibirInputsGestacao] = useState(false);
  const [dataInicioForm, setDataInicioForm] = useState('');

  const navigate = useNavigate();

  const handleSubmitForm = async e => {
    e.preventDefault();
    const payloadBovino = {
      //service bovino
      idBovino: idBovinoForm,
      idFazenda: idFazendaForm,
      reprodutor: reprodutorForm,
      data_nascimento: dataForm,
      idVaca: idVacaForm,
      nome: nomeForm,
      cor: corForm,
      peso: pesoForm,
      chifre: chifreForm,
      sexo: sexoForm
    };

    const payloadRacaHasBovino = {
      //service bovino
      idBovino: idBovinoForm,
      raca: racaForm,
    };

    const payloadReprodu = {
      //service Reprodu
      idBovino: idBoiForm,
      idVaca: idBovinoForm,
      dataInicio: dataInicioForm
    };

    const payloadVaca = {
      //service Vaca
      idBovino: idBovinoForm,
      producaoLeite: producaoLeiteForm,
      gravida: gravidaForm,
      dandoLeite: dandoLeiteForm,
    };

    const payloadBoi = {
      //service Boi
      idBovino: idBovinoForm,
    };



    try {
      //const { data } = await gadoSeguro.post('/bovino', payloadBovino);
    
      if(sexoForm === 'Femea'){
        //const { data } = await gadoSeguro.post('/vaca', payloadVaca);
        if(gravidaForm === "1"){
          //const { data } = await gadoSeguro.post('/reproducao', payloadReprodu);
        }
      }else{
        //const { data } = await gadoSeguro.post('/boi', payloadBoi);
      }
    
    } catch (error) {
      console.log("Cadastro falhou!", error)
    }

    // Navegar para outra página após o envio do formulário
    navigate('/');
  };

  return (
    <Base title={"Cadastro de Bovino"}>
      <Form onSubmit={e => { handleSubmitForm(e) }}
                style={{margin: "0 auto", backgroundColor: "#E0E7CA", minWidth: "500px",
                maxWidth: "800px", marginBottom: "10%", padding: "2em 3em 2em 3em",
                    borderRadius: "1em" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                    <Form.Label style={{ fontWeight: "bold" }}>Nome</Form.Label>
                    <Form.Control type="name" required onChange={e => setNomeForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlBovino">
                    <Form.Label style={{ fontWeight: "bold" }}>Id do Bovino</Form.Label>
                    <Form.Control type="number" required // resgatar bovinos
                        
                        onChange={e => setIdBovinoForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlFazenda">
                    <Form.Label style={{ fontWeight: "bold" }}>Fazenda</Form.Label>
                    <Form.Select required 
                        
                        onChange={e => setIdFazendaForm(e.target.value)}>
                            <option value="">Selecione a fazenda</option>{fazendas.map(fazenda => (
                            <option key={fazenda.idFazenda} value={fazenda.idFazenda}>{fazenda.nome}</option>
                         ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlVaca">
                    <Form.Label style={{ fontWeight: "bold" }}>Vaca</Form.Label>
                    <Form.Select required 
                        
                        onChange={e => setIdVacaForm(e.target.value)}>
                            <option value="">Selecione a vaca mãe</option>
                            {vacas.map(vaca => (
                              <option key={vaca.idVaca} value={vaca.idVaca}>{vaca.idVaca}</option>
                            ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlPeso">
                    <Form.Label style={{ fontWeight: "bold" }}>Peso</Form.Label>
                    <Form.Control type="number" required
                        
                        onChange={e => setPesoForm(e.target.value)} />
                </Form.Group>
              
                <Form.Group className="mb-3" controlId="exampleForm.ControlDataG">
                    <Form.Label style={{ fontWeight: "bold" }}>Data de nascimento</Form.Label>
                    <Form.Control type="date" required
                            
                            onChange={e => setDataForm(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlSexo">
                    <Form.Label style={{ fontWeight: "bold" }}>Sexo</Form.Label>
                    <Form.Select required 
                        
                        onChange={e => { setSexoForm(e.target.value); 
                          if (e.target.value === 'Femea') {
                          setExibirInputsFemea(true);
                          } else {
                            setExibirInputsFemea(false);
                            setProducaoLeiteForm('');
                            setGravidaForm('');
                          }}}>
                            <option value="">Selecione um sexo</option>
                            <option value="Femea">Fêmea</option>
                            <option value="Macho">Macho</option>
                    </Form.Select>
                </Form.Group>
                {exibirInputsFemea && (
                  <>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlLeite">
                      <Form.Label style={{ fontWeight: "bold" }}>Produção de leite</Form.Label>
                      <Form.Control type="number" required 
                        
                        onChange={e => setProducaoLeiteForm(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlDLeite">
                      <Form.Label style={{ fontWeight: "bold" }}>Dando leite?</Form.Label>
                      <Form.Select required 
                          
                          onChange={e => setDandoLeiteForm(e.target.value)}>
                            <option value="">Selecione a opção</option>
                            <option value={1}>Sim</option>
                            <option value={0}>Não</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlGravida">
                      <Form.Label style={{ fontWeight: "bold" }}>Grávida</Form.Label>
                      <Form.Select required 
                          
                          onChange={e => {
                            setGravidaForm(e.target.value);
                            if (e.target.value === "1") {
                              setExibirInputsGestacao(true);
                            } else {
                              setExibirInputsGestacao(false);
                              setDataInicioForm('');
                            }
                          }}>
                            <option value="">Selecione a opção</option>
                            <option value={1}>Sim</option>
                            <option value={0}>Não</option>
                      </Form.Select>
                    </Form.Group>

                    {exibirInputsGestacao && (
                      <>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlDataG">
                        <Form.Label style={{ fontWeight: "bold" }}>Data de Início</Form.Label>
                        <Form.Control type="date" required
                            
                            onChange={e => setDataInicioForm(e.target.value)} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="exampleForm.ControlVaca">
                        <Form.Label style={{ fontWeight: "bold" }}>Boi</Form.Label>
                        <Form.Select  
                            
                            onChange={e => setIdBoiForm(e.target.value)}>
                                <option value="">Selecione o boi que é o pai</option>
                                {bois.map(boi => (
                                  <option key={boi.Bovino_idBovino} value={boi.Bovino_idBovino}>{boi.Bovino_idBovino}</option>
                                ))}
                        </Form.Select>
                      </Form.Group>
                      </>
                    )}
                  </>
                )}
                <Form.Group className="mb-3" controlId="exampleForm.ControlReprodutor">
                  <Form.Label style={{ fontWeight: "bold" }}>Reprodutor</Form.Label>
                  <Form.Select required 
                      
                      onChange={e => setReprodutorForm(e.target.value)}>
                        <option value="">Selecione a opção</option>
                        <option value={1}>Sim</option>
                        <option value={0}>Não</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlCor">
                  <Form.Label style={{ fontWeight: "bold" }}>Cor</Form.Label>
                  <Form.Select required 
                      
                      onChange={e => setCorForm(e.target.value)}>
                        <option value="">Selecione uma cor</option>
                        <option value="Preto">Preto</option>
                        <option value="Branco">Branco</option>
                        <option value="Laranja">Laranja</option>
                        <option value="Amarelo">Amarelo</option>
                        <option value="Vermelho">Vermelho</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlRaca">
                  <Form.Label style={{ fontWeight: "bold" }}>Raça</Form.Label>
                  <Form.Select required 
                      
                      onChange={e => setRacaForm(e.target.value)}>
                      <option value="">Selecione a raça</option>
                      <option value="Angus">Angus</option>
                      <option value="Holandesa">Holandesa</option>
                      <option value="Nelore">Nelore</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlChifre">
                  <Form.Label style={{ fontWeight: "bold" }}>Chifre</Form.Label>
                  <Form.Select required 
                      
                      onChange={e => {
                        e.target.value === 'Sim' ? setChifreForm(true) : setChifreForm(false);
                      }}>
                        <option value="">Selecione se possui chifre</option>
                        <option value={1}>Sim</option>
                        <option value={0}>Não</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="d-flex flex-column align-items-center">
                    <BotoesCadastrarVoltar/>
                    <ToastContainer />
                </Form.Group>
            </Form>
    </Base>
  );
};

export default CadastrarBovino;
