import React from 'react';
import { mount } from 'enzyme';
import Select from './Select';

describe('Test case for testing Select component', () => {
	let wrapper;

	const options = [
		{
			description: '',
			value: '',
		},
	];

	beforeEach(() => {
		wrapper = mount(<Select options={options} label="Choose cars" id="select" onClick={() => {}} />, {});
	});

	it('renders Select component', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
