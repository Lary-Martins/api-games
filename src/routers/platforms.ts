import { Router } from 'express';
import {
  deletePlatform,
  getAllPlatforms,
  getOnePlatform,
  postPlatform,
  updatePlatform,
} from '../controllers/platform';

const platformRoutes = Router();

platformRoutes.get('/',       getAllPlatforms);
platformRoutes.get('/:id',    getOnePlatform);
platformRoutes.post('/',      postPlatform);
platformRoutes.put('/:id',    updatePlatform);
platformRoutes.delete('/:id', deletePlatform);

export default platformRoutes;
