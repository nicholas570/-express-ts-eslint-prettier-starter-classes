import ITestModel from '../interfaces/model';

class TestModel implements ITestModel {
  public async getAll(): Promise<string> {
    return 'Hello from the model';
  }
}

export default TestModel;
