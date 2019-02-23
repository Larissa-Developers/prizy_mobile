export const isDevelopmentEnvironment = () => {
  return true; // TODO: add some logic
};

export default {
  serverURL: process.env.SERVER_URL || 'http://52.47.130.43:8000',
};
