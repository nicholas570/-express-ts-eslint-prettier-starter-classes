import testModel from '../models/testModel';

const testRepository = {
  getAll: async () => {
    const results = await testModel.getAll();
    return results;
  },
};

export default testRepository;
