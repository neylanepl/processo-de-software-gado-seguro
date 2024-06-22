import React from 'react';
import { useNavigate } from 'react-router-dom';
//import { Table } from "react-bootstrap"

import Base from '../base/base';
import BtnGreen from '../../components/buttongreen';

const ListarCarteirasVacinacao = () => {
    const navigate = useNavigate();

    const data = [
        { id: 1, col1: '123456'},
        { id: 2, col1: '124567'},
        { id: 3, col1: '147965'}
    ];

    return (
        <Base title={"Bovinos com Carteira de Vacinação"}>

                <table className="table table-bordered align-middle" >
                    <thead className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                        <tr>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>ID do Bovino</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map(item => (
                            <tr key={item.id}  >
                                <td style={{ background: "#ffffff" }}>{item.col1}</td>
                                <td style={{ background: "#ffffff" }}>
                                    <BtnGreen
                                        title={"Ver Carteira"}
                                        route={"/aplicacao/carteiraVacinacao/"+ item.col1}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

        </Base>
    );
};

export default ListarCarteirasVacinacao;
