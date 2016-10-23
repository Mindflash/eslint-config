'use strict';

module.exports = {
	'rules': {
		// prevents assignment inside of conditionals i.e: if (user.name = 'steve)
		'no-cond-assign': [2, 'always'],

		// disallow use of console in code
		'no-console': 2,

		// disallow constant expressions in conditions i.e: if(false)
		'no-constant-condition': 2,

		// disallow use of control characters in regular expressions
		'no-control-regex': 2,

		// prevent use of debugger
		'no-debugger': 2,

		// prevent duplicate arguments in function definitions
		'no-dupe-args': 2,

		// prevent duplicate keys in object literals
		'no-dupe-keys': 2,

		// prevent duplicate case label in switch statements
		'no-duplicate-case': 2,

		// no empty character class in regex expressions
		'no-empty-character-class': 2,

		// no empty block statement" i.e if(foo) {}
		'no-empty': 2,

		// prevents reassignment of error object in catch clauses
		'no-ex-assign': 2,

		// prevents unnecessary boolean casts
		'no-extra-boolean-cast': 2,

		// prevents unnecessary parentheses
		'no-extra-parens': 2,

		// prevents extra semicolons
		'no-extra-semi': 2,

		// prevent reassignment of function declarations
		'no-func-assign': 2,

		// prevent variable or function declarations in nested blocks
		'no-inner-declarations': 2,

		// prevent invalid regular expression strings in RegExp constructors
		'no-invalid-regexp': 2,

		// prevents irregular white space characters
		'no-irregular-whitespace': 2,

		// prevents calling global object proeprites as functions i.e: JSON()
		'no-obj-calls': 2,

		// prevents direct use of Object.prototype builtins
		'no-prototype-builtins': 2,

		// prevents multiple spaces in regular expression literals
		'no-regex-spaces': 2,

		// prevents sparse arrays
		'no-sparse-arrays': 2,

		// prevents template literal placeholder syntax in regular strings: i.e "Hello ${name}"
		'no-template-curly-in-string': 2,

		// prevents confusing multi line expressions
		'no-unexpected-multiline': 2,

		// preents unreachable code
		'no-unreachable': 2,

		// prevents control flow statements in finally blocks
		'no-unsafe-finally': 2,

		// require isNan() when checking for NaN
		'use-isnan': 2,

		// enforce valid JSDoc comments
		'valid-jsdoc': 0,

		// enforce comparing type of expressions against valid strings
		'valid-typeof': [2, {'requireStringLiterals': true}],

		// prevents negation of left operand of relational operators i.e if(!key in object)
		'no-unsafe-negation': 2
	}
}