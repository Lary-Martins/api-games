import express, { Express } from 'express';

class App {
  private app: Express;
  private port: string;
  private apiRoutes = {
    platform: '/platform'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server online in port ${this.port}`)
    });
  }
}

export default App;