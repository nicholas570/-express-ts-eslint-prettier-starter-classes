import IRepository from '../interfaces/repository';
import TestModel from '../models/testModel';
class TestRepository implements IRepository {
  public async getAll() {
    const testModel = new TestModel();
    const results = await testModel.getAll();
    return results;
  }
}

export default TestRepository;
