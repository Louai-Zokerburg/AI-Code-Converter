const errorHandlerMiddleWare = async (error, req, res, next) => {
  res.status(error.status || 500).json({ success: false, msg: error.message });
};

export { errorHandlerMiddleWare };
