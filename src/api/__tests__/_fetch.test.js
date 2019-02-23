import _fetch from '../_fetch';
import { mockFetchImplementation } from '../utils/mock-fetch';

describe('Custom fetch implementation', () => {
  beforeEach(() => {
    global.fetch = mockFetchImplementation({ status: 200 });
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });

  it('gets called', async () => {
    const url = 'a-random-url';
    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    };

    await _fetch(url, options);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(url, options);
  });
});
