import React from 'react';
import { mount } from 'enzyme';
import Card from './Card';

describe('Test case for testing Card component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<Card>test card</Card>, {});
	});

	it('renders Card component', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
