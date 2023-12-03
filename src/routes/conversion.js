import express from 'express';

import {
  convert,
  getCurrentCenversions,
  createNewConversion,
} from '../controllers/convertController.js';

const router = express.Router();

router.route('/:id').patch(convert);
router.route('/new').post(createNewConversion);
router.route('/current').get(getCurrentCenversions);

export default router;
