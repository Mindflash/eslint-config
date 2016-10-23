'use strict';

module.exports = {
	'env': {
		'es6': true
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
	},
	'rules': {
		// only use braces where necessary
		'arrow-body-style': [2, 'as-needed'],

		// require parens in arrow function arguments
		'arrow-parens': [2, 'as-needed'],

		// require space before & after arrow functions arrow
		'arrow-spacing': [2, {'before': true, 'after': true}],

		// verify super() call in constructors
		'constructor-super': 2,

		// enforce consistent spacing with the * when using generator functions
		'generator-star-spacing': [2, 'after'],

		// prevent modifying variables of class definitions
		'no-class-assign': 2,

		// prevents confusing arrow syntax abuse i.e let x = a => 1 ? 2 : 3;
		'no-confusing-arrow': [2, {'allowParens': true}],

		// prevents constants from being reassigned
		'no-const-assign': 2,

		// prevents duplicate names in class members
		'no-dupe-class-members': 2,

		// prevents duplicate imports
		'no-duplicate-imports': 2,

		// prevents symbol from being called with the new operator
		'no-new-symbol': 2,

		// prevents this/super before calling super()
		'no-this-before-super': 2,

		// prevents unnecessary use of computer properties with literals
		'no-useless-computed-key': 2,

		// prevents unnecessary constructors
		'no-useless-constructor': 2,

		// prevents useless renaming of references in import, export, and destructuring statements
		'no-useless-rename': 2,

		// prevents use of var enforces use of block scoping
		'no-var': 2,

		// requires object literal shorthand syntax
		'object-shorthand': 2,

		// prefer arrow functiosn as callbacks.
		'prefer-arrow-callback': 2,

		// suggest using const where appropriate.
		'prefer-const': 2,

		// prevents use of parseInt()
		'prefer-numeric-literals': 1,

		// prefer reflect methods where applicable
		'prefer-reflect': 1,

		// prefer using rest parameters instead of arguments object
		'prefer-rest-params': 1,

		// prefer the spread operator instead of apply()
		'prefer-spread': 1,

		// prefer template literals instead of string concatenation
		'prefer-template': 2,

		// require generator functions to yield
		'require-yield': 2,

		// imposes consistent spacing inside of curly braces inside of template strings
		'template-curly-spacing': 2,

		// enforces consistent spacing around the * in yield* expressions
		'yield-star-spacing': [2, 'after'],

		// enforces spacing between rest and spread operators and their expressions
		'rest-spread-spacing': [2, 'never'],

		// requires import statements to be alphabetaized
		'sort-imports': 0,

		// require symbol description
		'symbol-description': 1,
	}
}