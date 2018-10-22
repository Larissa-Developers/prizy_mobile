export const isDevelopmentEnvironment = () => {
  return true; // TODO: add some logic
};

export default {
  serverURL: process.env.SERVER_URL || 'http://localhost:8000',
};
