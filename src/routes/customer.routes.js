import express from 'express';
import Controller from '../controllers/customer.controller';
import Services from '../services/customer.services';
import authValidation from '../middleware/authentication';

const router = express.Router();
const customerController = new Controller();
const customerServices = new Services();

router.use(authValidation);
router.get('/', (req,res) => customerController.findCustomer(req,res,customerServices));
router.post('/', (req,res) => customerController.createCustomer(req,res, customerServices));
router.put('/', (req,res) => customerController.updateCustomer(req,res, customerServices));

export default router;