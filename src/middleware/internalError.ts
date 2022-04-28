import { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const internalError = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('foi mal aê')
}