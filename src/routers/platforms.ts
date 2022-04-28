import { Router } from 'express';
import { PlatformController } from '../controllers/PlatformController';

const platformRoutes = Router();

const platformController = new PlatformController;

platformRoutes.get('/',    platformController.getAllPlatform);
platformRoutes.get('/:id', platformController.getOnePlatform);
platformRoutes.post('/',   platformController.savePlatform);

/* platformRoutes.post('/',      postPlatform);
platformRoutes.put('/:id',    updatePlatform);
platformRoutes.delete('/:id', deletePlatform);
 */

export default platformRoutes;
