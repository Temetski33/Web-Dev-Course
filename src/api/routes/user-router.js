import express from 'express';
import {
  getUser,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.js';

import {body} from 'express-validator';
import {validationErrors} from '../../middlewares/error-handlers.js';

const userRouter = express.Router();


//console.log('Routerissa ollaan');

userRouter.route('/')
   .get(getUser)
   .post(
     body('email').trim().isEmail(),
     body('username').trim().isLength({min: 3, max: 20}).isAlphanumeric(),
     body('password').trim().isLength({min: 8}),
     validationErrors,
     postUser
   );

userRouter.route('/:id').get(getUserById).put(putUser).delete(deleteUser);


export default userRouter;
