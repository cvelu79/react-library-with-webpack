/**
 * Used in jest.config.js
 *
 * @file: enzyme.config.js
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { JSDOM } = require('jsdom');

const url = 'http://localhost';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', { url });
const { window } = jsdom;

function copyProps(src, target) {
	const props = Object.getOwnPropertyNames(src)
		.filter(prop => typeof target[prop] === 'undefined')
		.reduce(
			(result, prop) => ({
				...result,
				[prop]: Object.getOwnPropertyDescriptor(src, prop),
			}),
			{},
		);
	Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
	userAgent: 'node.js',
};
global.requestAnimationFrame = callback => {
	return setTimeout(callback, 0);
};
global.cancelAnimationFrame = id => {
	clearTimeout(id);
};

copyProps(window, global);

configure({ adapter: new Adapter() });
