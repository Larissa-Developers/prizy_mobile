import * as ActionTypes from '../actiontypes';

export const initalState = {
  user: {},
};

const account = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.ACCOUNT_LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case ActionTypes.ACCOUNT_LOGOUT:
      return {
        ...state,
        user: {},
      };
  }
  return state;
};

export default account;
