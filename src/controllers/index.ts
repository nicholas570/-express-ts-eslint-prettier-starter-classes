import { Router } from 'express';
import IController from '../interfaces/controller';
import TestController from './testController';

class MainController implements IController {
  public path = '/api';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    const testController = new TestController();
    this.router.use(`${this.path}`, testController.router);
  }
}

export default MainController;
