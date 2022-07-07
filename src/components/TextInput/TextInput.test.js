import React from 'react';
import { mount } from 'enzyme';
import TextInput from './TextInput';

describe('Test case for testing TextInput component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<TextInput />, {});
	});

	it('renders TextInput component', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
