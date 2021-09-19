import express, { Router, Request, Response, NextFunction } from 'express';
import testService from '../services/testService';

const testController: Router = express.Router();

testController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const results = await testService.getAll();
    return res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

export default testController;
