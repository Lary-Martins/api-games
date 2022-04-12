import { PlatformRepository } from '../repositories/PlatformRepository';
import { IPlatformService } from '../interfaces/IPlatform';
import { StatusCodes } from 'http-status-codes';

export class PlatformService implements IPlatformService {

  constructor( private platformRepository: PlatformRepository) {
    this.platformRepository = new PlatformRepository
  }

  async getAll() {
    try {
      const data = await this.platformRepository.getAll();
      return { code: StatusCodes.OK, data };
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
  
  async getOne(id: string) {
    try {
      const data = await this.platformRepository.getOne(id);
      if (!data) return { code: StatusCodes.NOT_FOUND, data: 'Platform not found' }
      return { code: StatusCodes.OK, data }
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
}