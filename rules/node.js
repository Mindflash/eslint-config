'use strict';

module.exports = {
	'env': {
		'node': true
	},

	'rules': {
		// enforce a return after callback
		'callback-return': 2,

		// ensures require is called only at the top level of a module
		'global-require': 2,

		// enforce callback error handling
		'handle-callback-err': 2,

		// prevents require statements from being mixed with variable declaraionts
		'no-mixed-requires': 2,

		// prevents new requires: const foo = new require('bar');
		'no-new-require': 2,

		// prevents __dirname and __filename  with string concatenation
		'no-path-concat': 2,

		// prevents process.env
		'no-process-env': 0,

		// prevents process.exit
		'no-process-exit': 1,

		// restrict the usage of certain modules
		'no-restricted-modules': 0,

		// prevent synchronous methods
		'no-sync': 2
	}
};
