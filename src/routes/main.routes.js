import express from 'express';
import customerRoutes from './customer.routes';
import authRoutes from './auth.routes';
import orderRoutes from './order.routes';

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/customer", customerRoutes);
router.use("/order", orderRoutes);

export default router;