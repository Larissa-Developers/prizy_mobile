import * as ActionTypes from '../actiontypes';
import * as AccountAPI from '../../api/account';

/**
 * Registers user to the backend service.
 *
 * @param {string} email User's email
 * @param {string} name User's name
 */
export const register = (email, name) => {
  return dispatch => {
    return AccountAPI.register(email, name)
      .then(user => {
        dispatch(login(user));
        return user;
      })
      .catch(err => {
        return Promise.reject(err);
      });
  };
};

/**
 * Creates a redux-action to store user's information locally.
 *
 * @param {*} user The user's data
 * @returns
 */
export const login = user => {
  return {
    type: ActionTypes.ACCOUNT_LOGIN,
    user,
  };
};

export const logout = () => {
  return {
    type: ActionTypes.ACCOUNT_LOGOUT,
  };
};

/**
 * Demonstrates an action creator that dispatches more than one action.
 * redux-thunk middleware makes the creator able to return function instead
 * of an object.. inside the function, many actions can be dispatched.
 *
 * The function's purpose is to show an async action creators is made of...
 * ...remove when no longer needed (also remove the corresponding test).
 *
 */
export const demoAsyncAction = () => {
  return dispatch => {
    dispatch({
      type: 'demo/ASYNC_ACTION_1',
    });

    return new Promise((resolve, reject) => {
      // lets fake that something asynchronous happened...

      dispatch({
        type: 'demo/ASYNC_ACTION_2',
        dummy: 'dummy text',
      });

      resolve(true);
    });
  };
};
