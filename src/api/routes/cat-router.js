import express from 'express';
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

// multer imports
import multer from 'multer';
const upload = multer({dest: 'uploads/'})

const catRouter = express.Router();

//console.log('Routerissa ollaan');

catRouter.route('/').get(getCat).post(upload.single('file'), postCat);

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);


export default catRouter;
