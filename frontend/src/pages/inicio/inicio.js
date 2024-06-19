import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Base from '../base/base';

const Inicio = () => {
  const redirectToBovinoHome = () => {
    window.location.href = '/bovinos/cadastrarBovino/';
  };

//   const redirectToVacinaHome = () => {
//     window.location.href = '/vacinas';
//   };

//   const redirectToVacinacaoHome = () => {
//     window.location.href = '/bovinos/telaListagemCarteira';
//   };

//   const redirectToDoseHome = () => {
//     window.location.href = '/doses';
//   };


    return (
      <Base title={"Administração de Bovinos"}>
        <Form.Group className='text-center' style={{ maxWidth: "800px", margin: "0 auto" }}>
          <Row style={{ paddingBottom: "7%" }}>
            <Col className="d-grid gap-2">
              <button
                className="btn btn-success"
                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }}
                onClick={redirectToBovinoHome}>
                Quantitativos ou graficos
              </button>
            </Col>
          </Row>
          {/*<Row style={{ paddingBottom: "7%" }}>
            <Col className="d-grid gap-2">
              <button
                className="btn btn-success"
                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }}
                onClick={redirectToVacinacaoHome}>
                Carteiras de vacinação
              </button>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "7%" }}>
            <Col className="d-grid gap-2">
              <button
                className="btn btn-success"
                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }}
                onClick={redirectToVacinaHome}>
                Vacinas
              </button>
            </Col>
          </Row>
          <Row style={{ paddingBottom: "7%" }}>
            <Col className="d-grid gap-2">
              <button
                className="btn btn-success"
                style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00", width: "auto" }}
                onClick={redirectToDoseHome}>
                Doses
              </button>
            </Col>
          </Row>    */}
        </Form.Group>
      </Base>
    );
  }

export default Inicio;