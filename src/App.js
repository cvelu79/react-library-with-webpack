import React from 'react';
import { Button, Select, Input } from './components';

import './App.css';
import Card from './components/Card/Card';

const selectOptions = [
	{
		description: 'React',
		value: '1',
	},
	{
		description: 'Angular',
		value: '2',
	},
	{
		description: 'Vue',
		value: '3',
	},
];

const App = () => {
	return (
		<div className="page-layout">
			<Card>
				<Input name="email" id="email-input" label="Email" placeholder="name@example.com" onChange={() => {}} />
				<Select id="ui-select" options={selectOptions} label="Please select below options:" />
				<Button className="primary-button" label="Download" onClick={() => {}} />
			</Card>
		</div>
	);
};

export default App;
