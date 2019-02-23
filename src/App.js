/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppLaunchStack } from './navigators';
import { View } from 'react-native';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';

const { persistor, store } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <AppLaunchStack />
            </View>
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
