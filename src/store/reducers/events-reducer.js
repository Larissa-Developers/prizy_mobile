import * as ActionTypes from '../actiontypes';

export const initalState = {
  list: [],
  listing: false,
};

const events = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.EVENTS_LIST_IN_PROGRESS:
      return {
        ...state,
        listing: true,
      };
    case ActionTypes.EVENTS_LIST_SUCCESS:
      return {
        ...state,
        listing: false,
        list: action.response,
      };
    case ActionTypes.EVENTS_LIST_FAIL:
      return {
        ...state,
        listing: false,
      };
  }
  return state;
};

export default events;
