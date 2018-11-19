import fetch from './_fetch';
import env from '../environment';

export const fetchEvents = () => {
  const url = `${env.serverURL}/api/events`;
  const opts = {
    needsAuth: true,
  };

  return fetch(url, opts);
};
