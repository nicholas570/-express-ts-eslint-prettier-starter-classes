import express, { Router, Request, Response, Express } from 'express';
import testController from './testController';

const router: Router = express.Router();

router.use('/test', testController);

const setupRoutes = (app: Express) => {
  app.use('/api', router);
};

export default setupRoutes;
