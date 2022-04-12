import { Request, Response } from 'express';
import { PlatformService } from '../services/PlatformService';
import { PlatformRepository } from '../repositories/PlatformRepository';

  export const getAllPlatform = async( _req: Request, res: Response ) => {
    try {
      const platformService = new PlatformService(new PlatformRepository);
      const response = await platformService.getAll();
      res.status(response.code).json(response.data);
    } catch (error) { 
      const message = error as string;
      console.log(message)
    }
  }