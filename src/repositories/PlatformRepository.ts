import Platform from '../database/models/platform';
import { IPlatformRepository } from '../interfaces/IPlatform';

export class PlatformRepository implements IPlatformRepository {
  async getAll() {
    try {
      const data = await Platform.findAll();
      return data
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }

  async getOne(id: string) {
    try {
      const data = await Platform.findByPk(id);
      return data;
    } catch (error) {
      const message = error as string;
      throw new Error(message);
   }
  }

  async save(name: string) {
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