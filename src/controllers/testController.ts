import { Router, Request, Response, NextFunction } from 'express';
import IController from '../interfaces/controller';
import IUser from '../models/model';
import TestService from '../services/testService';

class TestController implements IController {
  public path = '/test';
  public router = Router();
  public service = new TestService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.getAll);
  }

  private async getAll(req: Request, res: Response, next: NextFunction): Promise<Response<IUser[]> | undefined> {
    try {
      const testService = new TestService();
      const results = await testService.getAll();
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }
}

export default TestController;
