const autoPrefixer = require('autoprefixer');

module.exports = () => ({
	// parser: file.extname === '.sss' ? 'sugarss' : false,
	// plugins: {
	//     'postcss-import': { root: file.dirname },
	//     'postcss-preset-env': options['postcss-preset-env']
	//         ? options['postcss-preset-env']
	//         : false
	// }
	plugins: ['postcss-preset-env', autoPrefixer],
});
