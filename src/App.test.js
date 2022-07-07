import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('Test case for testing App component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<App />, {});
	});

	it('renders App component', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
