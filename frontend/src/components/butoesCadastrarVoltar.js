import React from 'react';

import BotaoVoltar from "./botaoVoltar";
import BotaoCadastrar from "./botaoCadastrar";

const BotoesCadastrarVoltar= () => {
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <BotaoCadastrar/>
            <BotaoVoltar/>
        </>
    )

};

export default BotoesCadastrarVoltar;