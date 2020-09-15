import express from 'express';
import AuthService from '../services/auth.services';
import AuthController from '../controllers/auth.controller';

const router = express.Router();

router.post('/', (req,res) => AuthController(req,res,AuthService));

export default router;