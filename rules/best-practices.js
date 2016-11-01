'use strict';

module.exports = {
	'rules': {
		// enforces getter/setter pairs in objects
		'accessor-pairs': 0,

		// enforces return statements in callbacks of array prototype methods.
		'array-callback-return': 2,

		// treat var statements like they are block scoped
		'block-scoped-var': 2,

		//forces class methods that don't use this to be static methods
		'class-methods-use-this': 0,

		// specify the maximum cyclomatic complexity allowed in code base
		'complexity': [2, 10],

		// requires functions to have a consistent return
		'consistent-return': 1,

		// require curly braces around blocks. i.e if, else, else if etc.
		'curly': [2, 'multi-line', 'consistent'],

		// enforces the use of a default case in all switch statements
		'default-case': 0,

		// enforces a consistent placement of the . in a member expression
		'dot-location': [2, 'property'],

		// stops unnecessary use of square-bracket notation when accessing object properties
		'dot-notation': 2,

		// stops type coercion from being a thing
		'eqeqeq': [2, 'always'],

		// guards for in loops, for in loops will iterate up the prototype chain possibly causing unwanted behaviour.
		'guard-for-in': 1,

		// prohibits use of alert, confirm, and prompt
		'no-alert': 2,

		// prohibits use of caller/callee
		'no-caller': 2,

		// prevents access to uninitalized lexical bindings as well as accessing hoisted functions across case clauses
		'no-case-declarations': 2,

		// requires regex literals to escape division operators
		'no-div-regex': 2,

		// disallow else after a return in an if
		'no-else-return': 2,

		// stops functions from having empty bodies
		'no-empty-function': 2,

		// stops destructuring patterns that have no affect
		'no-empty-pattern': 2,

		// prevents the use of == when comparing to a null
		'no-eq-null': 2,

		// prevents use of eval()
		'no-eval': 2,

		// prevents tampering with native prototypes
		'no-extend-native': 2,

		// prevents unnecessary use of bind()
		'no-extra-bind': 2,

		// prevents unnecessary labels
		'no-extra-label': 2,

		// prevents fall through in switch statements
		'no-fallthrough': 2,

		// forces numbers to be written explicitly as floats i.e: 0.7 vs .7
		'no-floating-decimals': 2,

		// prevents assignment to native or read only globals
		'no-global-assign': 2,

		// prevents hacky type conversions that are difficult to read
		'no-implicit-coercion': 2,

		// prevents global and function declarations in the global scope
		'no-implicit-globals': 2,

		// prevents hacky work arounds for evalling javascript code
		'no-implied-eval': 2,

		// prevents use of deprecated __iterator__ property
		'no-iterator': 2,

		// prevents gosu level imperative code
		'no-labels': 2,

		// prevents unnecessary nested blocks
		'no-lone-blocks': 2,

		// prevents functions within loops
		'no-loop-func': 2,

		// prevents magic numbers
		'no-magic-numbers': [2, {"ignoreArrayIndexes": true, "enforceConst": true, "ignore": [-1, 0, 1]}],

		// prevents multiple white space characters
		'no-multi-spaces': 2,

		// prevents use of \ to create multiline strings, template strings should be used instead
		'no-multi-str': 2,

		// prevents hacky use of function constructor
		'no-new-func': 2,

		// prevents use of string, number, boolean with new operator
		'no-new-wrappers': 2,

		// prevents constructor calls using the new operator that do not assign the resulting object to a variable
		'no-new': 2,

		// prevents octal escape sequences in string literals
		'no-octal-escape': 2,

		// prevents use of octal litearls i.e 071,
		'no-octal': 2,

		// prevents reassignment of function parameters
		'no-param-reassign': 2,

		// prevents use of deprecated __proto__ property should favor Object.getPrototypeOf instead
		'no-proto': 2,

		// prevents potentially confusing practice of redeclaring variables
		'no-redeclare': [2, {"builtinGlobals": true}],

		// prevents potentially confusing assignments in return statements
		'no-return-assign': 2,

		// prevents scripts urls --- another potentially hacky way of evaluating strings as javascript code
		'no-script-url': 2,

		// prevents self assignment i.e: [a, b] = [a, b];
		'no-self-assign': [2, {props: true}],

		// prevents self comparison
		'no-self-compare': 2,

		// prevents potentially confusing use of comma operators
		'no-sequences': 2,

		// prevents literals and other expressions that cannot be an error object from being thrown
		'no-throw-literal': 2,

		// variables in loop conditions not modified by the loop could be a mistake
		'no-unmodified-loop-condition': 1,

		// unused expressions which have no affect on the state of the program indicate a logic error
		'no-unused-expressions': 2,

		// no unused labels
		'no-unused-labels': 2,

		// stops confusing call() and apply() usage
		'no-useless-call': 2,

		// prevents confusing string concatenation
		'no-useless-concat': 2,

		// prevents useless escape chars
		'no-useless-escape': 2,

		// prevents usage of void operator as it isn't necessary anymore
		'no-void': 2,

		// prevents warning comments from being forgotten about
		'no-warning-comments': 1,

		// prevents use of with statements
		'no-with': 2,

		// forces variable declarations to be at the top of their scope.
		'vars-on-top': 2,

		// prevents hard to read equality checks
		'yoda': [2, {"exceptRange": true}],

		// prevents this key word from being used outside of classes or class like objects
		'no-invalid-this': 2
	}
}
