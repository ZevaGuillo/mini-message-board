import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan'
import newRouter from '../routes/new';
import { dbConnection } from '../database/config';

class Server {

    private app: Application;
    private port: string;
    private paths = {
        new: '/new',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.DBConnection();

        this.middlewares();

        this.routes();
    }

    async DBConnection(){
        await dbConnection()
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors())
        this.app.use(morgan('dev'))
    }

    routes(){
        this.app.use( this.paths.new , newRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server run on port ${this.port}!!`);
        })
    }
}

export default Server;