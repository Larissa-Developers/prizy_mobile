import reducer, { initalState } from '../account';
import * as actions from '../../actions/account';
import * as ActionTypes from '../../actiontypes';

describe('[Reducer] Account', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initalState);
  });

  it('should handle ACCOUNT_LOGIN', () => {
    const mockedUser = {
      first_name: 'babis',
      last_name: 'sougias',
    };
    const mockedAction = actions.login(mockedUser);

    expect(reducer(undefined, mockedAction)).toEqual({
      user: mockedUser,
    });
  });

  it('should handle ACCOUNT_LOGOUT', () => {
    const mockedAction = {
      type: ActionTypes.ACCOUNT_LOGOUT,
    };
    const mockedState = {
      user: {
        first_name: 'some',
        last_name: 'random person',
      },
    };

    expect(reducer(mockedState, mockedAction)).toEqual({
      ...mockedState,
      user: {},
    });
  });
});
