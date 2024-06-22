import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//import gadoSeguro from '../../services/connectionGadoSeguro';

import Base from '../base/base';
import BtnGreen from '../../components/buttongreen';

const ListarVacinas = () => {
    const navigate = useNavigate();

    const vacina = [
        { id: 1, nome_vacina: 'Aftosa', fabricante: 'VetFarma', info: 'Aplicar no musculo'},
    ];

    const [vacinas, setVacinas] = useState([]);
    

    useEffect(() => {
        const fetchVacinas = async () => {
            try {
                //const response = await gadoSeguro.get('/vacinas');
                //setVacinas(response.data);
            } catch (error) {
                console.error("erro ao listar vacinas: ", error);
            }
        };

        fetchVacinas();
    }, []);

    const deletarVacina = async (nome_vacina) => {
        try {
            //const response = await gadoSeguro.delete(`/vacina/${nome_vacina}`);
            //window.location.reload();
        } catch (error) {
            console.error("erro ao deletar pessoa: ", error);
        }
    };

    return (
            <Base title={"Vacinas cadastradas no sistema"}>
                <div 
                className="d-grid gap-2 d-md-flex justify-content-md-end"
                style={{ marginBottom: "2%" }}>
                    <BtnGreen 
                        title={"Cadastrar Vacina"}
                        route={"/vacinacao/cadastrarVacina"}
                    />
                </div>

                <table className="table table-bordered align-middle" >
                    <thead className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                        <tr>
                            <th style={{ backgroundColor: "#E0E7CA" }} scope="col" >Nome</th>
                            <th style={{ backgroundColor: "#E0E7CA" }} scope="col" >Fabricante</th>
                            <th style={{ backgroundColor: "#E0E7CA" }} scope="col" >Informação Extra</th>
                            <th style={{ backgroundColor: "#E0E7CA" }} scope="col"></th>
                        </tr>
                    </thead>
                    <tbody className="text-center" >
                    {vacina.map(vacina => (
                            <tr key={vacina.nome_vacina} >
                                <td>{vacina.nome_vacina}</td>
                                <td>{vacina.fabricante}</td>
                                <td>{vacina.info}</td>
                            <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <button className="botaoEditar btn btn-primary"
                                    style={{ color: "white", textDecoration: "none", border: "none", backgroundColor: "#47a2ed" }} variant="warning" 
                                    onClick={e => navigate(`/vacinas/editarVacina/${vacina.nome_vacina}`, { state: { vacina } })}>
                                    Editar
                                    <span className="editar">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color='white' viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </span>
                                </button>

                                <button className="botaoApagar btn btn-danger" style={{ color: "white", textDecoration: "none", border: "none", backgroundColor: "#d10606" }} variant="warning" onClick={e => deletarVacina(vacina.nome_vacina)}>
                                    Deletar
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" color='white' viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </span>
                                </button>
                            </td>
                        </tr>
                         ))}
                    </tbody>
                </table>
            </Base>
    );
};

export default ListarVacinas;