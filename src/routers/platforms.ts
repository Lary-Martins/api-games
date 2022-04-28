import { Router } from 'express';
import { PlatformController } from '../controllers/PlatformController';

const platformRoutes = Router();

const platformController = new PlatformController;

platformRoutes.get('/',    platformController.getAllPlatform);
platformRoutes.get('/:id', platformController.getOnePlatform);
platformRoutes.post('/',   platformController.savePlatform);
platformRoutes.put('/:id', platformController.updatePlatform);
platformRoutes.delete('/:id', platformController.removePlatform);


export default platformRoutes;
