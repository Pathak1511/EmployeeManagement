const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err,
    });
    // for frontend
    // res.status(err.statusCode).render('error', {
    //   title: `Error ${err.statusCode}`,
    //   status: err.status,
    //   statusCode: err.statusCode,
    //   message: 'Page not found',
    // });
  } else {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
    // for frontend
    // res.status(err.statusCode).render('error', {
    //   title: 'Error 500',
    //   status: err.status,
    //   statusCode: err.statusCode,
    //   message: 'Internal Server Error',
    // });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    console.log(`Error occured in ${process.env.NODE_ENV}`);
    sendErrorDev(err, res);
  } else {
    console.log(`Error occured in ${process.env.NODE_ENV}`);
    //let error = { ...err };
    sendErrorProd(err, res);
  }
};
