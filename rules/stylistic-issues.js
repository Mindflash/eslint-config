'use strict';

module.exports = {
  'rules': {
    // prevent extra spaces inside of array brackets
    'array-bracket-spacing': [2, 'never'],

    // enforce spaces inside of single line blocks
    'block-spacing': [2, 'always'],

    // enforce brace style
    'brace-style': [2, '1tbs', {'allowSingleLine': false}],

    // enforces camel case
    'camelcase': 2,

    // prevent trailing commas
    'comma-dangle': 2,

    // enforce spacing around commas
    'comma-spacing': [2, {'before': false, 'after': true}],

    // enforce style for comma seperated lists
    'comma-style': [2, 'last'],

    // prevent space in computer properties
    'computed-property-spacing': [2, 'never'],

    // enforce a consistent 'this' naming convention
    'consistent-this': [2, 'self'],

    // enforce new line at the end of files
    'eol-last': 2,

    // enforce consistent spacing between function identifiers and their invocations
    'func-call-spacing': [2, 'never'],

    // require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 2,

    // require or disallow named function expressions
    'func-names': 1,

    // enforce use of function expressions or declarations
    'func-style': [1, 'expression', {'allowArrowFunctions': true}],

    // black list certain identifiers
    'id-blacklist': 0,

    // enforce minimum and maximum identifier lengths
    'id-length': [1, {'min': 2, 'max': 30, 'exceptions': ['_']}],

    // enforce consistent indentation
    'indent': [2, 2, {'SwitchCase': 1, 'MemberExpression': 1}],

    // enforce consistent use of string quotation style with jsx attributes
    'jsx-quotes': 0,

    // enforce consistent spacing between keys and values
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],

    // enforce consistent spacing around keywords
    'keyword-spacing': [2, {'before': true, 'after': true}],

    // enforce consistent positioning of line comments
    'line-comment-position': [2, {'position': 'above'}],

    // enforce consistent linebreak style
    'linebreak-style': [2, 'unix'],

    // enforce consistent spacing around comments
    'lines-around-comment': [1,
      {
        'beforeBlockComment': true,
        'afterBlockComment': false,
        'beforeLineComment': true,
        'afterLineComment': false
      }],

    // enforce consistent spacing around directives
    'lines-around-directive': [2, 'always'],

    // enforces maximum depth that blocks can be nested
    'max-depth': [2, {'max': 4}],

    // enforce a maximum line length
    'max-len': [2, {
      'code': 120,
      'ignoreUrls': true,
      'ignoreComments': true,
      'ignoreTrailingComments': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],

    // enforce a maximum file length
    'max-lines': [1, 200],

    // enforce max nested callbacks
    'max-nested-callbacks': [2, {'max': 5}],

    // enforce maximum number of parameters in function definitions
    'max-params': [1, {'max': 3}],

    // enforce max number of statements per line
    'max-statements-per-line': [2, {'max': 1}],

    // enforce max number of statements allowed in function body
    'max-statements': [1, {'max': 10}],

    // enforce consistent use of new lines with ternary expressions
    'multiline-ternary': 0,

    // require constructor names to begin with a capital letter
    'new-cap': 2,

    // require parentheses when invoking a constructor with no arguments
    'new-parens': 2,

    // require empty an line after variable declaration
    'newline-after-var': [2, 'always'],

    // enforce consistent spacing before return statements
    'newline-before-return': 2,

    // require newline after each call in a method chain
    'newline-per-chained-call': [2, {'ignoreChainWithDepth': 2}],

    // prevent use of the array constructor
    'no-array-constructor': 2,

    // prevent use of bitwise operators
    'no-bitwise': 2,

    // prevent continue statements
    'no-continue': 2,

    // prevent inline comments with code
    'no-inline-comments': 2,

    // no lonely if statements, encourages correct application of else if statements
    'no-lonely-if': 2,

    // prevents the use of mixed logical operators with out parentheses
    'no-mixed-operators': 0,

    // prevents mixed indentation style
    'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],

    // prevents multiple empty lines
    'no-multiple-empty-lines': [2, {'max': 2}],

    // prevents confusing application of negated conditions in if/else statements and ternaries
    'no-negated-condition': 2,

    // prevent nested ternary expressions
    'no-nested-ternary': 2,

    // prevents use of the Object Constructor
    'no-new-object': 2,

    // prevent unary operators ++ and --
    'no-plusplus': 0,

    // prevent specified syntax
    'no-restricted-syntax': [2,
      'DebuggerStatement',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // prevent use of tabs
    'no-tabs': 0,

    // prevent use of ternary operators
    'no-ternary': 0,

    // prevent trailing whitespace at the end of lines
    'no-trailing-spaces': 2,

    // prevent underscore dangle i.e let foo_ = 'bar';
    'no-underscore-dangle': 2,

    // prevents ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 2,

    // prevents whitespace before properties i.e foo .bar
    'no-whitespace-before-property': 2,

    // enforce consistent line breaks inside of braces
    'object-curly-newline': 0,

    // enforce consistent spacing inside braces
    'object-curly-spacing': [2, 'always'],

    // enforce consistent property formatting
    'object-property-newline': [2, {'allowMultiplePropertiesPerLine': true}],

    // enforce consistent line use around variable declarations
    'one-var-declaration-per-line': 2,

    // enforce consistent variable declaration style
    'one-var': [2, 'never'],

    // disable enforcement of operator shorthand
    'operator-assignment': 0,

    // enforce consistent linebreak style for operators
    'operator-linebreak': [2, 'after'],

    // enforce consistent line usage within blocks
    'padded-blocks': [2, 'never'],

    // enforce consistent style for defining object literal properties
    'quote-props': [2, 'as-needed', {
      'keywords': false,
      'unnecessary': true,
      'numbers': false
    }],

    // enforce consistent string style
    'quotes': [2, 'single', {'allowTemplateLiterals': true}],

    // require JSDoc comments
    'require-jsdoc': 0,

    // enforce consistent use of whitespace around semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],

    // enforce use of semicolons
    'semi': [2, 'always'],

    // require object keys to be alphabetized
    'sort-keys': 0,

    // require vars to be alphabetized
    'sort-vars': 0,

    // enforce consistent use of empty lines around blocks
    'space-before-blocks': [2, 'always'],

    // enforce consistent use of whitespace before function parentheses
    'space-before-function-paren': [2, 'never'],

    // enforce consistent use of whitespace inside of parentheses
    'space-in-parens': [2, 'never'],

    // enforce consistent spacing around infix operators
    'space-infix-ops': 2,

    // enforce consistent spacing around unary operators
    'space-unary-ops': 2,

    // enforce consistent whitespace at the beginning of a comment
    'spaced-comment': [2, 'always'],

    // enforce use of Unicode Byte Order Mark
    'unicode-bom': 0,

    // require regex literals to be wrapped
    'wrap-regex': 2
  }
}
