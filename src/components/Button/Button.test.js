import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('Test case for testing Button component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<Button onClick={() => {}} />, {});
	});

	it('renders Button component', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
