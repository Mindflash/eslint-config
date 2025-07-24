import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import nodePlugin from 'eslint-plugin-n';

export default [
  eslint.configs.recommended,
  nodePlugin.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    ignores: [
      // Dependencies
      '**/node_modules/**',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',

      // Build output
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',

      // Logs
      '**/*.log',
      '**/npm-debug.log*',
      '**/yarn-debug.log*',
      '**/yarn-error.log*',

      // Environment variables
      '**/.env',
      '**/.env.*',

      // IDE
      '**/.idea/**',
      '**/.vscode/**',
      '**/*.swp',
      '**/*.swo',

      // OS
      '**/.DS_Store',
      '**/Thumbs.db',

      // Reference file that imports from published package
      'example.config.js',
    ],
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'n/no-unpublished-import': 'off', // Allow importing devDependencies in config file
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Modern JavaScript best practices
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-object-spread': 'error',
      'prefer-destructuring': [
        'error',
        {
          array: true,
          object: true,
        },
      ],
      'no-await-in-loop': 'error',
      'no-return-await': 'error',
      'require-await': 'error',
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      // Node.js best practices
      'n/no-deprecated-api': 'error',
      'n/no-process-exit': 'error',
      'n/no-path-concat': 'error',
      'no-buffer-constructor': 'error',

      // Additional error handling
      'no-promise-executor-return': 'error',
      'prefer-promise-reject-errors': 'error',

      // Code style and maintainability
      'max-len': [
        'error',
        {
          code: 120,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'always'],
      'arrow-body-style': ['error', 'as-needed'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      // Explicitly ignore issues in comments
      'no-undef': ['error', { typeof: true }],
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',

      // Additional code quality rules
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-throw-literal': 'error',
    },
  },
  {
    files: [
      '**/*.test.{js,mjs}',
      '**/*.spec.{js,mjs}',
      '**/test/**/*.{js,mjs}',
      '**/__tests__/**/*.{js,mjs}',
    ],
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
      'max-len': 'off',
      'prefer-const': 'off',
      'no-var': 'off',
    },
  },
  {
    files: ['*.config.{js,mjs}', 'config/**/*.{js,mjs}', 'scripts/**/*.{js,mjs}'],
    rules: {
      'no-console': 'off',
      'no-unused-vars': 'off',
    },
  },
];
