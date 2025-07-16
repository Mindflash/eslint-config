# @mindflash-ops/eslint-config

Modern ESLint configuration for Node.js projects with essential best practices and future-proofing.

## Requirements

- **Node.js** >= 22.14.0
- **ESLint** >= 9.0.0
- **Prettier** >= 3.2.0

## Features

- 🚀 **ESLint v9 flat config** - Future-proof configuration format
- 🌟 **Latest ECMAScript features** - Automatically supports new JS features
- 📦 **Essential Node.js patterns** - Critical deprecation detection
- 🔧 **Auto-fixable rules** - Most issues can be automatically resolved
- 🎨 **Prettier integration** - Seamless code formatting
- 🧪 **Test & config friendly** - Relaxed rules for test and config files

## Included Plugins

- **@eslint/js** - Core ESLint recommended rules
- **eslint-plugin-n** - Node.js specific best practices
- **eslint-config-prettier** - Prettier compatibility

## Installation

```sh
npm install --save-dev @mindflash-ops/eslint-config @eslint/js eslint eslint-config-prettier eslint-plugin-n prettier
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import sharedConfig from '@mindflash-ops/eslint-config/eslint.config.js';

export default [
  ...sharedConfig,
  // Add your custom rules here if needed
  {
    rules: {
      // Custom overrides
    },
  },
];
```

### Package Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

## Configuration Details

### Modern JavaScript

- `no-var`, `prefer-const`, `prefer-template` (warnings) - Encourages modern syntax
- `no-duplicate-imports` (error) - Cleaner imports

### Node.js Best Practices

- `n/no-deprecated-api` (error) - Prevents breaking changes
- `no-buffer-constructor` (error) - Use `Buffer.from()` instead

### Code Quality

- `eqeqeq`, `no-return-await` (errors) - Prevents bugs and performance issues
- `require-await`, `no-unused-vars`, `max-len` (warnings) - Code cleanliness

### Code Style

- `semi`, `quotes`, `comma-dangle` (auto-fixable errors) - Consistent formatting
- `no-console` allowed - Common in Node.js development

## File-Specific Rules

### Test Files (`*.test.js`, `*.spec.js`)

- Very relaxed rules to not interfere with testing patterns
- Console usage allowed
- Unused variables allowed

### Configuration Files (`*.config.js`, `config/**`)

- Console usage allowed
- Unused variables allowed for configuration flexibility

## Future-Proof Design

This configuration automatically adapts to new Node.js and JavaScript features:

- **`ecmaVersion: 'latest'`** - Always uses newest JavaScript features
- **Node.js deprecation detection** - Automatically flags deprecated APIs
- **Stable dependency ranges** - Won't break with minor updates

## License

ISC
