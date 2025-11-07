import express from 'express';
import {
  postLogin,
  getMe
} from '../controllers/auth-controller.js';
import { authenticateToken } from '../../middlewares/authentification.js';

const authRouter = express.Router();

authRouter.route('/login').post(postLogin);
authRouter.route('/me').get(authenticateToken, getMe);

export default authRouter;
