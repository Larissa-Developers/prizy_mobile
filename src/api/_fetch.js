import { getAuthorizationToken } from './utils/token';

const getDefaultHeaders = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
};

const processOpts = opts => {
  const defaultOpts = {
    method: 'GET',
    headers: { ...getDefaultHeaders() },
  };

  const mergedOpts = {
    ...defaultOpts,
    ...opts,
  };

  const { needsAuth, ...restOpts } = mergedOpts;
  if (needsAuth === true) {
    return getAuthorizationToken().then(token => {
      return {
        ...restOpts,
        Authorization: `JWT ${token}`,
      };
    });
  }

  return Promise.resolve(restOpts);
};

const _fetch = (url, opts) => {
  return processOpts(opts).then(options => {
    return fetch(url, options)
      .then(res => {
        if (res.status >= 400) {
          return res.json().then(
            json => {
              const err = {
                status: res.status,
                url: url,
                description:
                  json.description ||
                  'Something went wrong connecting with the service',
              };
              return Promise.reject(err);
            },
            error => {
              const err = {
                status: res.status,
                url: url,
                error,
              };
              return Promise.reject(err);
            }
          );
        }

        return res.json().catch(() => {
          // it's ok...
          // it's just a response without body..
          // HTTP status indicates that it's fine...
          return {};
        });
      })
      .catch(err => Promise.reject(err));
  });
};

export default _fetch;
