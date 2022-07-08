import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';

const Tabs = ({ children }) => {
	const [active, setActive] = useState(0);

	const onTabClick = newActive => () => {
		setActive(() => newActive);
	};

	return (
		<div className="tabs-component">
			<div className="tabs-row">
				{children.map((child, index) => (
					// eslint-disable-next-line jsx-a11y/interactive-supports-focus
					<div
						role="tab"
						key={child.props.label}
						className={`tab ${index === active ? 'active' : ''}`}
						onClick={onTabClick(index)}
						onKeyDown={onTabClick(index)}
					>
						{child.props.label}
					</div>
				))}
			</div>
			<div className="tabs-content">{children[active]}</div>
		</div>
	);
};

Tabs.propTypes = {
	children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs;
