import React from 'react';
import { Component } from 'react'
import { SafeAreaView } from 'react-native';

// navigation container
import AppContainer from './AppNavigationContainer';

interface Props {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
