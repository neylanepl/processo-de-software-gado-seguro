import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


import Base from '../base/base';
import BtnGreen from '../../components/buttongreen';

//import gadoSeguro from '../../services/connectionGadoSeguro';

const DashboardGeral = () => {
    const dataVacinacaoTipoVacina = {
        labels: ["Raiva", "Aftosa", "Brucelose", "Clostridioses"],
        datasets: [{
          label: '',
          data: ["100", "50", "30", "20"],
          borderWidth: 1,
          backgroundColor: ['#db2763', '#9B1FF2', '#0391ce', '#ff6400'],
        }],
    };

    const dataVacinacaoPeriodo = {
        labels: ["2021", "2022", "2023", "2024"],
        datasets: [{
          label: '',
          data: ["100", "120", "98", "34"],
          borderWidth: 1,
          backgroundColor: ['#0433ff', '#FFFF00', '#808080', '#00FA9A'],
        }],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                  drawOnChartArea: false
                }
            },
            y: {
                grid: {
                  drawOnChartArea: false
                }
            }
        },
        plugins: {
            legend: {
              display: false
            }
        },
      };


    return (
        <Base title={"Estatísticas de Vacinação"}>
            <h5 style={{marginBottom: '15px', marginTop: '2px'}}>Vacinação por Tipo de Vacina</h5>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>
                    <div className="chart-container" style={{position: "relative", width:"35vw", margin: '0px'}}>
                        <Bar data={dataVacinacaoTipoVacina} options={options}/>
                    </div>
                </div>
            </div>

            <h5 style={{marginBottom: '15px', marginTop: '2px'}}>Vacinação Anual</h5>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>
                    <div className="chart-container" style={{position: "relative", width:"35vw", margin: '0px'}}>
                        <Bar data={dataVacinacaoPeriodo} options={options}/>
                    </div>
                </div>
            </div>
                  
        </Base>
    );
};
        
export default DashboardGeral;
