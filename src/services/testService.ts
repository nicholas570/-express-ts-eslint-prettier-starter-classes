import IUser from '../models/UserModel';
import IService from '../interfaces/service';
import TestRepository from '../repositories/testRepository';

class TestService implements IService {
  public async getAll(): Promise<IUser[]> {
    const testRepository = new TestRepository();
    const results = await testRepository.getAll();
    return results;
  }
}

export default TestService;
