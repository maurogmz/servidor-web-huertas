import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import NodosRoutes from './routes/NodosRoutes';
import FeedsRoutes from './routes/FeedsRoutes';

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        const MONGO_URI = 'mongodb://localhost/apihuertas';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
            .then(db => console.log('DB is connect'));
        // Configuraciones del servidor
        this.app.set('port', process.env.PORT || 3000);
        // Middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/api/nodos',NodosRoutes);
        this.app.use('/api/feeds',FeedsRoutes);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on por', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();