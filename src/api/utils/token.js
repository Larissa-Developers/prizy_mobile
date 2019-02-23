import { AsyncStorage } from 'react-native';

/** The key to use for saving/retrieving the authorization token */
const AUTHORIZATION_TOKEN_STORAGE_KEY = 'AUTHORIZATION_TOKEN_STORAGE_KEY';

/**
 * Saves a given authorization token for later use.
 *
 * @param {string} token The authorization token to save.
 * @returns A promise to save the authorization token.
 */
export const saveAuthorizationToken = token => {
  return AsyncStorage.setItem(AUTHORIZATION_TOKEN_STORAGE_KEY, token);
};

/**
 * Retrieves a previously stored authorization token.
 *
 * @returns A promise that resolves with an authorization token.
 */
export const getAuthorizationToken = () => {
  return AsyncStorage.getItem(AUTHORIZATION_TOKEN_STORAGE_KEY);
};
