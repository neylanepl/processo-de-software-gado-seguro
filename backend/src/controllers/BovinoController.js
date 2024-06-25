const BovinoService = require('../services/bovinoService')

class BovinoController {

    //adicionar bovino
    async create_bovino(request, response) {
        const bovinoTemp = {
            idBovino:  request.body.idBovino,
            Fazenda_idFazenda: request.body.idFazenda,
            Vaca_idVaca: request.body.idVaca,
            reprodutor: request.body.reprodutor,
            sexo: request.body.sexo,
            data_nascimento: request.body.data_nascimento,
            chifre: request.body.chifre,
            nome: request.body.nome,
            peso: request.body.peso,
            cor: request.body.cor
        };

        try {
            BovinoService.addBovino(bovinoTemp);
            response.status(200).json({
                msg: "Bovino cadastrada com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Retornar todas as Bovinos de uma vacina
    async show_bovinos(request, response) {
        try {
            const bovinos = await BovinoService.getAllBovino()
            return response.status(200).json(bovinos)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Retornar uma Bovino pelo ID 
    async show_bovinoId(request, response) {
        const { id } = request.params
        try {
            const bovino = await BovinoService.getBovinoId(id)
            return response.status(200).json(bovino)
        } catch (err) {
            return response.status(400).json({
                error: err
            })
        }
    }

    //Atualiza uma Bovino
    async update_bovino(request, response) {
        const bovinoTemp = {
            Fazenda_idFazenda: request.body.Fazenda_idFazenda,
            Vaca_idVaca: request.body.Vaca_idVaca,
            reprodutor: request.body.reprodutor,
            sexo: request.body.sexo,
            data_nascimento: request.body.data_nascimento,
            chifre: request.body.chifre,
            nome: request.body.nome,
            peso: request.body.peso,
            cor: request.body.cor
        }

        try {
            BovinoService.getUpdateBovino(bovinoTemp);
            response.status(200).json({
                msg: "Bovino atualizado com sucesso"
            })
        } catch (error) {
            return response.status(400).json({
                error: error
            })
        }
    }

    //Deletar Bovino pelo ID
    async delete_bovino(request, response) {
        try {
            const { idBovino } = request.params.idBovino
            BovinoService.deleteBovino(idBovino);
            response.status(200).json({
                msg: "Bovino deletado com sucesso"
            })
        } catch (error) {
            console.log("nao foi possivel deletar")
            return response.status(400).json({
                error: error
            })
        }
    }


}

module.exports = new BovinoController()