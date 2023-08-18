import { Router } from "express";
import {  inserir, listarAgenda } from "../repository/agendarespository.js";

let endpoints = Router();

endpoints.get('/agenda/listar', async (req, resp) => {
    let dados = await listarAgenda();
    resp.send(dados);
})

endpoints.post('/agenda', async (req, resp) => {
    let agenda= req.body;

    let dados = await inserir(agenda);
    resp.send(dados);
})

export default endpoints
