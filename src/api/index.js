import express from 'express';
import catRouter from './routes/cat-router.js';
import userRouter from './routes/user-router.js';
import authRouter from './routes/auth-router.js';

// mini express sovellus
const router = express.Router();

// bind base url for all cat routes to catRouter
router.use('/cats', catRouter);

// same for users
router.use('/users', userRouter);

router.use('/auth', authRouter);

export default router;
