import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../events-actions';
import * as ActionTypes from '../../actiontypes/index';
import * as EventsAPI from '../../../api/events';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Events actions', () => {
  it('should dispatch many actions using demo action creator', () => {
    const mockedResponse = [{ title: 'event 1' }];

    const mockedFetchEvents = jest.spyOn(EventsAPI, 'fetchEvents');
    mockedFetchEvents.mockImplementation(() => Promise.resolve(mockedResponse));

    const expectedActions = [
      {
        type: ActionTypes.EVENTS_LIST_IN_PROGRESS,
      },
      {
        type: ActionTypes.EVENTS_LIST_SUCCESS,
        response: mockedResponse,
      },
    ];

    const store = mockStore({ account: {} });
    return store.dispatch(actions.fetchEvents()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(mockedFetchEvents).toHaveBeenCalledTimes(1);
    });
  });
});
