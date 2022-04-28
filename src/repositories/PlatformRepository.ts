import Platform from '../database/models/platform';
import { IPlatformRepository } from '../interfaces/IPlatform';
import { v4 } from 'uuid';

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

  async getByName(name: string) {
    try {
      const data = await Platform.findOne({where: {name}});
      return data;
    } catch (error) {
      const message = error as string;
      throw new Error(message);
   }
  }

  async save(name: string) {
    try {
      const newPlatform = { id: v4(), name };
      await Platform.create(newPlatform);
      return newPlatform;
    } catch (error) {
      const message = error as string;
      throw new Error(message);
   }
  }

  async update(id: string, name: string) {
    try{
      await Platform.update({ name }, { where: { id } });
      const updatedPlatform = { id, name };
      return updatedPlatform;
    } catch (error) {
      const message = error as string;
      throw new Error(message);
    }
  }
}