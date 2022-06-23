import 'dotenv/config'


import petController from './controller/petController.js'

import express from 'express'
import cors from 'cors'

const server = express();
server.use(cors());
server.use(express.json());

//config endpoint

server.use(petController);


server.listen(process.env.PORt,() => 
console.log(`Api conectada na porta ${process.env.PORT}`))