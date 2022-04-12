export interface IPlatform {
  id: string,
  name: string,
}

export interface IPlatformRepository {
  getAll(): Promise<IPlatform[]> | null;
  getOne(id: string): Promise<IPlatform | null> | null;
}

export interface IPlatformService {
  getAll(): Promise<IPlatformResponse>;
  getOne(id: string): Promise<IPlatformResponse>;
}