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

import {authenticateToken} from '../../middlewares/authentification.js';
import {upload} from '../../middlewares/upload.js';
import {body} from 'express-validator';
import {validationErrors} from '../../middlewares/error-handlers.js';

const catRouter = express.Router();

//console.log('Routerissa ollaan');

catRouter
  .route('/')
  .get(getCat)
  .post(
    authenticateToken,
    upload.single('file'),
    body('cat_name').trim().isLength({min: 3, max: 128}).escape(),
    body('weight').trim().isNumeric().toFloat(),
    validationErrors,
    postCat
  );

// omat kuvat
catRouter.route('/user').get(authenticateToken, getMyCats);
// jonkun muun käyttäjän kuvat
catRouter.route('/user/:id').get(authenticateToken, getCatsByUserId);
catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRouter;
