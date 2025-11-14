import express from 'express';
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
  getCatsByUserId,
  getMyCats,
} from '../controllers/cat-controller.js';

// multer imports

import { authenticateToken } from '../../middlewares/authentification.js';
import { upload } from '../../middlewares/upload.js';

const catRouter = express.Router();

//console.log('Routerissa ollaan');

catRouter.route('/').get(getCat).post(authenticateToken, upload.single('file'), postCat);

// omat kuvat
catRouter.route('/user').get(authenticateToken, getMyCats);
// jonkun muun käyttäjän kuvat
catRouter.route('/user/:id').get(authenticateToken, getCatsByUserId);
catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);


export default catRouter;
