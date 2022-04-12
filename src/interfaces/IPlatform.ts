import { StatusCodes } from 'http-status-codes';
// import { Code } from '../utils/StatusCodeEnum';

export interface IPlatform {
  id: string,
  name: string,
}

export interface IPlatformResponse {
  code: StatusCodes,
  data: IPlatform[] | IPlatform | string
}

export interface IPlatformRepository {
  getAll(): Promise<IPlatform[]> | null;
  getOne(id: string): Promise<IPlatform | null> | null;
}

export interface IPlatformService {
  getAll(): Promise<IPlatformResponse>;
  getOne(id: string): Promise<IPlatformResponse>;
}