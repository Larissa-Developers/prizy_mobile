import reducer, { initalState } from '../events-reducer';
import * as actions from '../../actions/events-actions';

describe('[Reducer] Events', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initalState);
  });

  it('should handle ACCOUNT_LOGIN', () => {
    const mockedList = [{ title: 'the amazing meetup' }];
    const mockedAction = actions.getEventsListSuccess(mockedList);

    expect(reducer(undefined, mockedAction)).toEqual({
      list: mockedList,
      listing: false,
    });
  });
});
