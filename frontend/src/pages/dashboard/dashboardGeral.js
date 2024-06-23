import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


import Base from '../base/base';

//import gadoSeguro from '../../services/connectionGadoSeguro';

const DashboardGeral = () => {
    const dataPrazoVacinas = {
        labels: ["Em dia", "Atrasadas"],
        datasets: [{
          label: '',
          data: ["30", "5"],
          borderWidth: 1,
          backgroundColor: ['#83A93A', '#cf0e0e'],
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
        <Base title={"Administração de Bovinos"}>       
            <h5>Visão geral</h5>
            <div className='row mt-3' style={{display: "flex", justifyContent: "space-evenly"}}>
                <div className='col' style={{ width: '300px', height: '100px', minWidth: '170px'}}>
                    <p style={{fontSize: '14px', margin: '0px', textAlign: 'center'}}>Número total de bovinos</p>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <p style={{fontSize: '32px', color: '#83A93A'}}>400</p>
                    </div>
                    
                </div>
                <div className='col' style={{ width: '300px', height: '100px', minWidth: '170px'}}>
                    <p style={{fontSize: '14px', margin: '0px', textAlign: 'center'}}>Número de bovinos vacinados</p>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <p style={{fontSize: '32px', textAlign: 'center', color: '#83A93A'}}>200</p>
                    </div>
                </div>
                <div className='col' style={{ width: '300px', height: '100px', minWidth: '170px'}}>
                    <p style={{fontSize: '14px', margin: '0px', textAlign: 'center'}}>Percentual de cobertura vacinal</p>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <p style={{fontSize: '32px', textAlign: 'center', color: '#83A93A'}}>50%</p>
                    </div>
                </div>
            </div>

            <h5 style={{marginBottom: '15px', marginTop: '2px'}}>Saúde do rebanho</h5>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div>
                    <p style={{fontSize: '14px', margin: '0px', textAlign: 'center'}}>Bovinos com vacinas em dia e atrasadas</p>
                    <div className="chart-container" style={{position: "relative", width:"35vw", margin: '0px'}}>
                        <Bar data={dataPrazoVacinas} options={options}/>
                    </div>
                </div>
            </div>
                  
        </Base>
    );
};
        
export default DashboardGeral;
