import IUser from '../models/model';

interface IService {
  getAll: () => Promise<IUser[]>;
}

export default IService;
