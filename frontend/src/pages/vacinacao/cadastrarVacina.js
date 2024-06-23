import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

//import gadoSeguro from '../../services/connectionGadoSeguro';
import Base from '../base/base';
import BotoesCadastrarVoltar from '../../components/butoesCadastrarVoltar';

const CadastrarVacina = () => {
    const [nomeForm, setNomeForm] = useState('');
    const [fabricanteForm, setFabricanteForm] = useState(0);
    const [informacoesExtrasForm, setInformacoesExtrasForm] = useState('');

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            fabricante: fabricanteForm,
            informacoesExtras: informacoesExtrasForm
        };

        try {
            //const { data } = await gadoSeguro.post('/vacina', payload);
            navigate('/vacinas');
        } catch (error) {
            toast.error("Cadastro falhou!");
        }
    };


    return (
        <Base title={"Cadastrar Vacina"}>
                <Form onSubmit={e => { handleSubmitForm(e) }} style={{margin: "0 auto", backgroundColor: "#E0E7CA", minWidth: "500px",
                maxWidth: "800px", marginBottom: "10%", padding: "2em 3em 2em 3em",
                    borderRadius: "1em" }}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlNome">
                        <Form.Label style={{ fontWeight: "bold" }}>Nome</Form.Label>
                        <Form.Control type="name" required onChange={e => setNomeForm(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlFabricante">
                        <Form.Label style={{ fontWeight: "bold" }}>Fabricante</Form.Label>
                        <Form.Control type="text" required onChange={e => setFabricanteForm(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInformacoes">
                        <Form.Label style={{ fontWeight: "bold" }}>Informações Extras</Form.Label>
                        <Form.Control type="text" required onChange={e => setInformacoesExtrasForm(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="d-flex flex-column align-items-center">
                        <BotoesCadastrarVoltar/>
                        <ToastContainer />
                    </Form.Group>
                </Form>
            </Base>
    );
};

export default CadastrarVacina;