import IService from '../interfaces/service';
import TestRepository from '../repositories/testRepository';
class TestService implements IService {
  public async getAll(): Promise<any> {
    const testRepository = new TestRepository();
    const results = await testRepository.getAll();
    return results;
  }
}

export default TestService;
