import express from 'express';
import Services from '../services/order.services';
import Controllers from '../controllers/order.controller';
import AuthValidation from '../middleware/authentication';

const router = express.Router();
const OrderServices = new Services();
const OrderControllers = new Controllers();

router.use(AuthValidation);
router.get('/', (req,res) => OrderControllers.getOrder(req,res,OrderServices));
router.post('/', (req,res) => OrderControllers.createOrder(req,res,OrderServices));

export default router;