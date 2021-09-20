import express, { Application } from 'express';
import cors from 'cors';
import options from '../config/cors';
import errorHandler from '../middlewares/errors';
import MainController from '../controllers';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers();
    this.initializeErrorHandling();
  }

  public listen() {
    const port = process.env.PORT || '3000';
    this.app.listen(port, () => {
      console.log(`App listening on the port ${port}`);
    });
  }

  public getServer(): Application {
    return this.app;
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(cors(options));
  }

  private initializeErrorHandling(): void {
    this.app.use(errorHandler);
  }

  private initializeControllers(): void {
    const mainController = new MainController();
    this.app.use('/', mainController.router);
  }

  private connectToTheDatabase(): void {
    console.log('connected');
  }
}

export default App;
