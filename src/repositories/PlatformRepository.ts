import Platform from '../database/models/platform';
import { IPlatform, IPlatformRepository } from '../interfaces/IPlatform';
import { uuid } from 'uuidv4';

export class PlatformRepository implements IPlatformRepository {
  async getAll(): Promise<IPlatform[]> {
    try {
      const data = await Platform.findAll();
      return data
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }

  async getOne(id: string): Promise<IPlatform | null> {
    try {
      const data = await Platform.findByPk(id);
      return data;
    } catch (error) {
      const message = error as string;
      throw new Error(message);
   }
  }

  async savePlatform(name: string): Promise<IPlatform | null> {
    try {
      const newPlatform = { name, id: uuid() };
      await Platform.create(newPlatform);
      return newPlatform;
    } catch (error) {
      const message = error as string;
      throw new Error(message);
   }
  }
}