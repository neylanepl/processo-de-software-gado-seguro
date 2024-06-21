import React from 'react';


const BotoesCadastrarVoltar= () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <button type="submit" value="submit" className="btn" style={{ backgroundColor: "#83A93A",color: "#ffffff", margin: "30px 0px 0 0" , width: "300px"}}>
                Cadastrar
            </button>
            <button className="btn" style={{ backgroundColor: "#9F9F9F", color: "#ffffff", margin: "30px 0px 0 0", width: "300px" }} onClick={handleGoBack}>
                Voltar
            </button>
        </>
    )

};

export default BotoesCadastrarVoltar;