/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'

export default class App extends Component {
  render() {
    return (
      <View testID="welcome">
        <Text>ToDo TDD</Text>
        <AddToDo></AddToDo>
        <ToDoList></ToDoList>
      </View>
    );
  }
}
