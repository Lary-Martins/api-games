import express, { Express } from 'express';
import platformRoutes from './routers/platforms';
import 'express-async-errors';
import cors from 'cors';

class App {
  private app: Express;
  private port: string;
  private apiRoutes = {
    platform: '/platform'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.middlewares()
    this.routes();
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server online in port ${this.port}`)
    });
  }

  middlewares(): void {
    this.app.use(cors())
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use(this.apiRoutes.platform, platformRoutes)
  }
}

export default App;