import React from 'react';
import { mount } from 'enzyme';
import Tabs from './Tabs';

describe('Test case for testing Tabs component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(
			<Tabs>
				<div label="Tab1">Test Tab1!</div>
				<div label="Tab2">Test Tab2!</div>
			</Tabs>,
			{},
		);
	});

	it('renders Tabs component', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
