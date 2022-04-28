import { IPlatformRepository, IPlatformService } from '../interfaces/IPlatform';
import { StatusCodes } from 'http-status-codes';

export class PlatformService implements IPlatformService {
  private platformRepository: IPlatformRepository

  constructor( platformRepository: IPlatformRepository) {
    this.platformRepository = platformRepository
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

  async save(name: string) {
    try {
      const platformFound = await this.platformRepository.getByName(name);
      if (platformFound) {
        return { code: StatusCodes.CONFLICT, data: 'Platform already exists' }
      }

      const data = await this.platformRepository.save(name);
      return { code: StatusCodes.CREATED, data }
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }

  async update(id: string, name: string) {
    try {
      const platformFound = await this.platformRepository.getOne(id);
      if (platformFound) {
        return { code: StatusCodes.NOT_FOUND, data: 'Platform not found' }
      }
      
      const data = await this.platformRepository.update(id, name);
      return { code: StatusCodes.ACCEPTED, data }
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
}