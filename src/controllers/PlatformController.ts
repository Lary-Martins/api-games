import { Request, Response } from 'express';
import { platformServiceFactory } from '../factory/PlatformFactory';
import { PlatformService } from '../services/PlatformService';

export class PlatformController {
  private platformServiceFactory: PlatformService;

  constructor() {
    this.platformServiceFactory = platformServiceFactory();

    this.getAllPlatform = this.getAllPlatform.bind(this);
    this.getOnePlatform = this.getOnePlatform.bind(this);
    this.savePlatform = this.savePlatform.bind(this);
    this.updatePlatform = this.updatePlatform.bind(this);
  }

  async getAllPlatform(_req: Request, res: Response): Promise<void> {
    try {
      const response = await this.platformServiceFactory.getAll();
      res.status(response.code).json(response.data);
    } catch (error) {
      const message = error as string;
      console.log(message);
    }
  }

  async getOnePlatform(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const response = await this.platformServiceFactory.getOne(id);
      res.status(response.code).json(response.data);
    } catch (error) {
      const message = error as string;
      console.log(message);
    }
  }

  async savePlatform(req: Request, res: Response): Promise<void> {
    const { name } = req.body;

    try {
      const response = await this.platformServiceFactory.save(name);
      res.status(response.code).json(response.data);
    } catch (error) {
      const message = error as string;
      console.log(message);
    }
  }

  async updatePlatform(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const response = await this.platformServiceFactory.update(id, name);
      res.status(response.code).json(response.data);
    } catch (error) {
      const message = error as string;
      console.log(message);
    }
  }
}
