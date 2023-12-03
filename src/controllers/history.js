import { StatusCodes } from 'http-status-codes';

import conversionModel from '../models/conversionModel.js';

const getAllHistory = async (req, res) => {
  const { userId } = req;

  const history = await conversionModel
    .find({ createdBy: userId })
    .sort({ createdAt: -1 });

  res.status(StatusCodes.OK).json({ success: true, history });
};

const getOneHistoryItem = async (req, res) => {
  const { id } = req.params;

  const historyItem = await conversionModel.findById(id);

  res.status(StatusCodes.OK).json({ success: true, historyItem });
};

const deleteAllHistory = async (req, res) => {
  const { userId } = req;

  await conversionModel.deleteMany({ createdBy: userId });

  res.status(StatusCodes.OK).json({ success: true });
};

const deleteOneHistoryItem = async (req, res) => {
  const { id } = req.params;

  await conversionModel.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ success: true });
};

export {
  getAllHistory,
  getOneHistoryItem,
  deleteAllHistory,
  deleteOneHistoryItem,
};
