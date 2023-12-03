import express from 'express';

import {
  getAllHistory,
  getOneHistoryItem,
  deleteAllHistory,
  deleteOneHistoryItem,
} from '../controllers/history.js';

const router = express.Router();

router.route('/').get(getAllHistory).delete(deleteAllHistory);
router.route('/:id').delete(deleteOneHistoryItem).get(getOneHistoryItem);

export default router;
