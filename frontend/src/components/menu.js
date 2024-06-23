import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications, IoIosMenu } from "react-icons/io";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const Menu = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center"
      style={{ backgroundColor: 'white', width: '100%', height: '40px', position: 'relative' }}
    >
      <div className="d-flex align-items-center">
        <button cclass="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style={{margin: "6px 6px 6px 6px", border: "0px", backgroundColor: "#ffffff"}}>
          <IoIosMenu style={{ color: "#83A93A" , height: "20px", width: "20px" }} />
        </button>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width: "300px"}}>
          <div class="offcanvas-header" style={{paddingBottom: "0px"}}>
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">GadoSeguro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul className="list-unstyled ps-0">
            <li className="border-top"></li>
            <li className="mb-1">
                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dash-collapse" aria-expanded="false">
                <FaAngleRight /> Dashboard
                </button>
                <div className="collapse" id="dash-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" style={{paddingLeft: "48px"}}>
                    <li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Geral</a></li>
                    <li><a href="/dashboardVacinacao" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Vacinação</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#bovino-collapse" aria-expanded="false">
                <FaAngleRight /> Bovinos
                </button>
                <div className="collapse" id="bovino-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" style={{paddingLeft: "48px"}}>
                    <li><a href="/bovinos/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Listar</a></li>
                    <li><a href="/bovinos/cadastrarBovino/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Cadastrar</a></li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#vacina-collapse" aria-expanded="false">
                <FaAngleRight /> Vacinação
                </button>
                <div className="collapse" id="vacina-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small" style={{paddingLeft: "48px"}}>
                    <li><a href="/vacinas/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Listar</a></li>
                    <li><a href="/vacinacao/cadastrarVacina/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Cadastrar</a></li>
                    <li><a href="/aplicacao/cadastrarAplicacao/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Realizar aplicação</a></li>
                    <li><a href="/aplicacao/listarCarteirasVacinacao/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Carteiras de vacinação</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h5 style={{ color: "#263900", margin: "0px" }}>GadoSeguro</h5>
      </div>
      <div className="d-flex align-items-center">
        <button className="btn">
          <IoIosNotifications style={{ color: "#263900", height: "20px", width: "20px" }} />
        </button>
        <button
          className="btn"
          style={{
            backgroundColor: '#E0E7CA',
            color: '#263900',
            borderRadius: '22px',
            margin: "6px 24px 6px 6px",
            height: "36px"
          }}
        >
          N
        </button>
      </div>
    </div>
  );
};

export default Menu;
