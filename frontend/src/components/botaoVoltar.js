import React from 'react';


const BotaoVoltar= () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <button className="btn" style={{ backgroundColor: "#9F9F9F", color: "#ffffff", margin: "30px 0px 0 0", width: "300px" }} onClick={handleGoBack}>
                Voltar
            </button>
        </>
    )

};

export default BotaoVoltar;