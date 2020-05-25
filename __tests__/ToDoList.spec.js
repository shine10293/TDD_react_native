/**
 * @format
 */

import 'react-native';
import React from 'react';
import ToDoList from '../src/ToDoList';
import { shallow } from 'enzyme';

describe('rendering', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            items: [
                {
                    text: 'some ToDo 1',
                    completed: false
                },
                {
                    text: 'some ToDo 2',
                    completed: true
                }
            ]
        }
        wrapper = shallow(<ToDoList {...props}></ToDoList>)
    })
    it('should render a flat list', () => {
        expect(wrapper.find('FlatList')).toHaveLength(1)
    })

    it('should pass props to FlatList', () => {
        expect(wrapper.find('FlatList').prop('data')).toBe(props.items)
    })
})

