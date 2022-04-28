import { StatusCodes } from 'http-status-codes';

export interface IPlatform {
  id: string,
  name: string,
}
// implementar um generic aqui 
export interface IPlatformResponse {
  code: StatusCodes,
  data: IPlatform[] | IPlatform | string | null
}

export interface IPlatformRepository {
  getAll(): Promise<IPlatform[]>;
  getByName(name: string): Promise<IPlatform | null>;
  getOne(id: string): Promise<IPlatform | null> | null;
  save(name: string): Promise<IPlatform | null>;
  update(id: string, name: string): Promise<IPlatform | null>;
  remove(id: string): Promise<void>;
}

export interface IPlatformService {
  getAll(): Promise<IPlatformResponse>;
  getOne(id: string): Promise<IPlatformResponse>;
  save(name: string): Promise<IPlatformResponse>;
  update(id: string, name: string): Promise<IPlatformResponse>;
}