import 'react-native';
import React from 'react';
import ToDoItem from '../src/ToDoItem';
import { shallow } from 'enzyme';

describe('rendering', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
        }
        wrapper = shallow(<ToDoItem {...props}></ToDoItem>)
    })
    it('should render a Text', () => {
        expect(wrapper.find('Text')).toHaveLength(1)
    })

    it('should render two buttons', () => {
        expect(wrapper.find('Button')).toHaveLength(2)
    })
})