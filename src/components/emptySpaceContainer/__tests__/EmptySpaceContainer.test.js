import React from 'react';
import { ActivityIndicator, Button } from 'react-native';
import { render, waitForElement } from 'react-native-testing-library';
import EmptySpaceContainer, { DEFAULT_MSG } from '../EmptySpaceContainer';

describe('EmptySpaceContainer component', () => {
  it('should render empty space with default message', async () => {
    const { getByText } = render(<EmptySpaceContainer showEmptySpace={true} />);
    await waitForElement(() => getByText(DEFAULT_MSG));
  });

  it("should render, by default, main content (component's children)", async () => {
    const { getByType, getByText } = render(
      <EmptySpaceContainer>
        <ActivityIndicator />
      </EmptySpaceContainer>
    );
    expect(() => getByText(DEFAULT_MSG)).toThrow();
    await waitForElement(() => getByType(ActivityIndicator));
  });

  it('should render custom component on empty space', async () => {
    const props = {
      showEmptySpace: true,
      onRenderEmptySpace: () => <ActivityIndicator />,
    };
    const { getByType, getByText } = render(
      <EmptySpaceContainer {...props}>
        <Button title={'i am a button'} />
      </EmptySpaceContainer>
    );
    expect(() => getByText(DEFAULT_MSG)).toThrow();
    expect(() => getByType(Button)).toThrow();
    await waitForElement(() => getByType(ActivityIndicator));
  });
});
