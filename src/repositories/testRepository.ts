import IRepository from '../interfaces/repository';
import IUser from '../models/model';
class TestRepository implements IRepository {
  public async getAll(): Promise<IUser[]> {
    // db query
    const users = [{ name: 'John', age: 36 }];
    const results: Promise<IUser[]> = new Promise((res) => setTimeout(res, 1500, users));
    return results;
  }
}

export default TestRepository;
