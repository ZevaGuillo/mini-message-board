import dotenv from 'dotenv'
import Server from './models/server';

// config dotenv
dotenv.config();

const server = new Server();
server.listen();