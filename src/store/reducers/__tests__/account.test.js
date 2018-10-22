import reducer, { initalState } from '../account';
import * as ActionTypes from '../../actiontypes';

describe('[Reducer] Account', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initalState);
  });

  it('should handle ACCOUNT_LOGOUT', () => {
    const mockedAction = {
      type: ActionTypes.ACCOUNT_LOGOUT,
    };
    const mockedState = {
      some_key: 'some_value',
    };

    expect(reducer(mockedState, mockedAction)).toEqual(initalState);
  });
});
