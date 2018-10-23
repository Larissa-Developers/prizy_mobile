import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../account';
import * as ActionTypes from '../../actiontypes/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Account actions', () => {
  it('should create an action for logging the user out', () => {
    const expectedAction = {
      type: ActionTypes.ACCOUNT_LOGOUT,
    };

    expect(actions.logout()).toEqual(expectedAction);
  });

  it('should dispatch many actions using demo action creator', () => {
    const expectedActions = [
      {
        type: 'demo/ASYNC_ACTION_1',
      },
      {
        type: 'demo/ASYNC_ACTION_2',
        dummy: 'dummy text',
      },
    ];

    const store = mockStore({ account: {} });
    return store.dispatch(actions.demoAsyncAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
