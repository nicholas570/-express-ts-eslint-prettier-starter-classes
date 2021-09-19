import { Request, Response } from 'express';

const errorMiddleware = (error: any, request: Request, response: Response) => {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response.status(status).send({
    message,
    status,
  });
};

export default errorMiddleware;
