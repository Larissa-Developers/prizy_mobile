import MockAsyncStorage from 'mock-async-storage';
import { saveAuthorizationToken, getAuthorizationToken } from '../token';

const mockStorage = () => {
  const mockImpl = new MockAsyncStorage();
  jest.mock('AsyncStorage', () => mockImpl);
};

describe('Authorization Token Utils', () => {
  beforeAll(() => {
    mockStorage();
  });

  it('retrieves a saved token', async () => {
    const someRandomToken = 'token';

    await saveAuthorizationToken(someRandomToken);
    const res = await getAuthorizationToken();

    expect(res).toBe(someRandomToken);
  });
});
