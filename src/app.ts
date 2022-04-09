import express, { Express } from 'express';
import platformRoutes from './routers/platforms';

class App {
  private app: Express;
  private port: string;
  private apiRoutes = {
    platform: '/platform'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.routes();
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server online in port ${this.port}`)
    });
  }
  routes(): void {
    this.app.use(this.apiRoutes.platform, platformRoutes)
  }
}

export default App;