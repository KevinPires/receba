import { clientePet, listarTodos } from "../repository/petRepository.js";

import { Router } from 'express';

const server = Router();

server.post('/pet', async (req, resp) => {
    try {
        const  pet = req.body;
        if(!pet.nome)
    throw new Error('nome do pet obrigatório');

    const petInserido = await clientePet (pet);
   
    resp.send(petInserido);
    } catch (err) {
        resp.status(400).send({erro:err.message})
        
    }
})


server.get('/pet', async (req, resp) => {
    try {
        const checarTodos = await listarTodos();
        resp.send(checarTodos);
    } catch (err) {
        resp.status(400).send({erro: 'Deu erro!'});
    }
})
export default server;