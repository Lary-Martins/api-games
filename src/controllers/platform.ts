import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Platform from '../database/models/platform';


export const getAllPlatforms = async (_req: Request, res: Response, _next: NextFunction) => {
  const getPlatforms = await Platform.findAll();
  
  res.status(StatusCodes.OK).json(getPlatforms);
};

export const getOnePlatform = (req: Request, res: Response, _next: NextFunction) => {
  const { id } = req.params;
  res.status(StatusCodes.OK).json({body:'platforms', id});
};

export const postPlatform = (req: Request, res: Response, _next: NextFunction) => {
  const { body } = req;
  res.status(StatusCodes.OK).json({body, post: 'request Post'});
};
