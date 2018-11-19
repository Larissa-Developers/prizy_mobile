/**
 * Returns a mocked `fetch` with a (given) mocked response.
 * The given response is wrapped around Promises as the `fetch` method expects in `network.js` file.
 *
 * Example usage:
 * ```
 * fetch = mockFetchImplementation({ status: 'ok' });
 * ```
 *
 * @param mockedResponse
 */
export const mockFetchImplementation = mockedResponse => {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(mockedResponse);
      },
    });
  });
};
