import express from 'express';
import customerRoutes from './customer.router';

const router = express.Router();

router.use("/customer", customerRoutes);

export default router;