import reducer, { initalState } from '../events-reducer';
import * as actions from '../../actions/events-actions';
import events from '../../../__fixtures__/events.json';

describe('[Reducer] Events', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initalState);
  });

  it('should handle ACCOUNT_LOGIN', () => {
    const mockedAction = actions.getEventsListSuccess(events);

    const res = reducer(undefined, mockedAction);
    expect(res).toEqual({
      list: events,
      listing: false,
    });
    expect(res.list).toHaveLength(events.length);
  });
});
