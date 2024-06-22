import React from 'react';
import { useNavigate } from 'react-router-dom';

import Base from '../base/base';

const CarteiraVacinacao = () => {
    const navigate = useNavigate();

    const dataBovino = [
        { id: 1, idBovino: '123456', nome: 'Mimoso', sexo: 'Macho', raca: 'Nelore', peso: '300', idade: '4'},
    ];

    const dataAplicacao = [
        { id: 1, vacina: '123456', lote: '2475CB', dose: '1°', dataAplicacao: '24/05/2023', proximaAplicacao: '24/05/2024', obs: 'Não pode tirar leite por 2 dias'},
    ];

    return (
        <Base title={"Carteira de Vacinação"}>
            <table className="table table-bordered table-bordered" >
                {dataBovino.map(item => (
                    <thead key={item.id} className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                        <tr>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>ID: {item.idBovino}</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Nome: {item.nome}</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Sexo: {item.sexo}</th>
                        </tr>
                        <tr>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Raça: {item.raca}</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Peso: {item.peso}</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Idade: {item.idade}</th>
                        </tr>
                    </thead>
                ))}
            </table>

                <table className="table table-bordered table-bordered" style={{marginTop: "50px"}}>
                    <thead className="text-center" style={{ backgroundColor: "#E0E7CA" }}>
                        <tr>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Vacina</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Lote</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Dose</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Data de Aplicação</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Próxima Aplicação</th>
                            <th scope="col" style={{ backgroundColor: "#E0E7CA" }}>Observação</th>
                        </tr>
                    </thead>
                    <tbody className="tabelaListagem text-center" >
                    {dataAplicacao.map(item => (
                        <tr key={item.id}>
                            <td >{item.vacina}</td>
                            <td >{item.lote}</td>
                            <td >{item.dose}</td>
                            <td >{item.dataAplicacao}</td>
                            <td >{item.proximaAplicacao}</td>
                            <td >{item.obs}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
           
        </Base>
    );
};

export default CarteiraVacinacao;
