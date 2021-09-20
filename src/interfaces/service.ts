import IUser from '../models/UserModel';

interface IService {
  getAll: () => Promise<IUser[]>;
}

export default IService;
