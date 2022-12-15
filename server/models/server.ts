import express, { Application } from 'express';
import newRouter from '../routes/new';

class Server {

    private app: Application;
    private port: string;
    private paths = {
        new: '/new',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        this.middlewares();

        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
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