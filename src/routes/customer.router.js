import express from 'express';
import Controller from '../controllers/customer.controller';
import Services from '../services/customer.services';

const router = express.Router();
const customerController = new Controller();
const customerServices = new Services();

router.get('/', (req,res) => customerController.findCustomer(req,res,customerServices));

export default router;

