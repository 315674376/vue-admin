/*
 * @Author: cbw
 * @Date: 2020-07-25 16:23:48
 * @Description: file content
 */
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'plugin:prettier/recommended',
		"prettier/vue"
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	}
};
