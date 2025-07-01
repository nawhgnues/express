const errorHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(404).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
};

export default errorHandler;
