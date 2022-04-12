import { Router } from 'express';
import { getAllPlatform } from '../controllers/PlatformController';

const platformRoutes = Router();

// const platformController = new PlatformController;

platformRoutes.get('/',    getAllPlatform);
// platformRoutes.get('/:id', getOnePlatform);

/* platformRoutes.post('/',      postPlatform);
platformRoutes.put('/:id',    updatePlatform);
platformRoutes.delete('/:id', deletePlatform);
 */

export default platformRoutes;
