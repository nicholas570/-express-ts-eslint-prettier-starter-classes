import testRepository from '../repositories/testRepository';

const testService = {
  getAll: async () => {
    const results = await testRepository.getAll();
    return results;
  },
};

export default testService;
