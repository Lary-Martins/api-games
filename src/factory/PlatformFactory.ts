import { PlatformService } from '../services/PlatformService';
import { PlatformRepository } from '../repositories/PlatformRepository';

export const platformServiceFactory = () => new PlatformService(new PlatformRepository());