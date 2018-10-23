import * as ActionTypes from '../actiontypes';

export const initalState = {};

const account = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.ACCOUNT_LOGOUT:
      return initalState;
  }
  return state;
};

export default account;
