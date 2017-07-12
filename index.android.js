
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Root } from "native-base";
import Main from './src/components/Main';
import app from './router';



export default class smartTasks extends Component {
  render() {

    return (
      <Root>
        <Main/>
      </Root>
    );
  }
}

AppRegistry.registerComponent('smartTasks', () => app);
