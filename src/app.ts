import express, { Express } from 'express';
import platformRoutes from './routers/platforms';
import 'express-async-errors';
import cors from 'cors';
import { internalError } from './middleware/internalError';
import db from './database/connection';

class App {
  private app: Express;
  private port: string;
  private apiRoutes = {
    platform: '/platform'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.dbConnection();
    this.middlewares()
    this.routes();
    this.errorHandler();
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server online in port ${this.port}`)
    });
  }

  async dbConnection():Promise <void>{
    try {
      await db.authenticate();
      console.log('Database online')
    } catch (error) {
      console.log(error)
    }
  }

  middlewares(): void {
    this.app.use(cors())
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use(this.apiRoutes.platform, platformRoutes)
  }

  errorHandler(): void {
    this.app.use(internalError);
  }
}

export default App;