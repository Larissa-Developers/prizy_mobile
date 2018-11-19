import * as ActionTypes from '../actiontypes';
import * as EventsAPI from '../../api/events';

/**
 * Action creator for fetching meetup events from the backend.
 */
export const fetchEvents = () => {
  return dispatch => {
    dispatch(getEventsListInProgress());

    return EventsAPI.fetchEvents()
      .then(response => {
        dispatch(getEventsListSuccess(response));
        return response;
      })
      .catch(err => {
        dispatch(getEventsListFailed(err));
        return Promise.reject(err);
      });
  };
};

export const getEventsListInProgress = () => {
  return { type: ActionTypes.EVENTS_LIST_IN_PROGRESS };
};

export const getEventsListSuccess = response => {
  return {
    type: ActionTypes.EVENTS_LIST_SUCCESS,
    response,
  };
};

export const getEventsListFailed = error => {
  return {
    type: ActionTypes.EVENTS_LIST_FAIL,
    error,
  };
};
