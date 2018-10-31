export const register = (email, name) => {
  // FIXME: add real network request
  return Promise.resolve({
    name,
    email,
  });
};
