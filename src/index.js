import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import agendacontroler from './controller/agendacontroler.js';

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(agendacontroler);

servidor.listen(process.env.PORT, () => console.log('API subiu!'));
