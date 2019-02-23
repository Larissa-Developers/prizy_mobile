import React from 'react';
import { Button } from 'native-base';
import { render, fireEvent } from 'react-native-testing-library';
import RetryView from '../RetryView';

describe('RetryView component', () => {
  it('should be able to click the "retry"', async () => {
    const onPress = jest.fn();
    const { getByType } = render(<RetryView onPress={onPress} />);

    fireEvent.press(getByType(Button));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
