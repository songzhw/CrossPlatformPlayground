import React from 'react';
import {Platform} from 'react-native';
import {Provider as ReduxProvider} from 'react-redux'
import Route from './js/core/Routes'
import store from "./js/redux/store";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default () => (
  <ReduxProvider store={store}>
    <Route/>
  </ReduxProvider>
)