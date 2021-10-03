import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors';
//const cors = require('cors'); 
//const express = require('express');
//const app = express();app.use(cors());
// Routes
import IndexRoutes from './routes/index.routes'
//import PostRoutes from './routes/post.routes'

export class App {
    app: Application;

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
        //this.app/
    }

    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
       this.app.use(express.json());
    }
    async listen(): Promise<void> {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
    routes(){
        this.app.use(IndexRoutes)
    }
}

  

 

