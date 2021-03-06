import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import beneficiariesCtrl from '../controllers/beneficiaries.controller';

const router = express.Router();

router.route('/')
  .get(beneficiariesCtrl.list)

export default router;
