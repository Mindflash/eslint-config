'use strict';

module.exports = {
	'rules': {
		// enforce consistent variable declarations
		'init-declarations': 2,

		// prevent shadow variables inside of catch
		'no-catch-shadow': 2,

		// prevent use of the delete operator on variables
		'no-delete-var': 2,

		// prevent labels being given the same name as variables
		'no-label-var': 2,

		// restrict use of certain global variable names
		'no-restricted-globals': 0,

		// prevent shadowing of restricted names
		'no-shadow-restricted-names': 2,

		// prevent variable declarations from shadowing variables declared in outer scope
		'no-shadow': 2,

		// prevent initializing to undefined
		'no-undef-init': 1,

		// prevent use of undeclared variables unless mentioned in a /* global */ comment
		'no-undef': 2,

		// prevent use of undefined variable
		'no-undefined': 2,

		// prohibit unused variable
		'no-unused-vars': 2,

		// prohibit variable and function use before their definition
		'no-use-before-define': 2
	}
}