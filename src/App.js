import React from 'react';
import Button from './components/Button';
import TextInput from './components/TextInput';

const App = () => {
	return (
		<div className="layout">
			<TextInput id="email-input" label="Email" placeholder="name@example.com" />
			<Button onClick={() => {}} />
		</div>
	);
};

export default App;
