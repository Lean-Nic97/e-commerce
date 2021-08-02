import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    } else {
        console.error(err);
        res.status(500).send(err.message);
    }
};

export default errorHandler;
