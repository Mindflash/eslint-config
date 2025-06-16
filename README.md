# @mindflash-ops/eslint-config

Modern ESLint configuration for Node.js v22+ projects using ESLint v9's flat config system.

## Features

- ESLint v9 flat config format
- ECMAScript 2024 support
- ESM modules support
- Prettier integration
- Modern JavaScript best practices
- Node.js v22.14.0+ compatibility

## Installation

```sh
npm install --save-dev @mindflash-ops/eslint-config
```

## Usage

Create an `eslint.config.js` file in your project root:

```js
import sharedConfig from '@mindflash-ops/eslint-config/eslint.config.js';
export default [...sharedConfig];
```

## Requirements

- Node.js >= 22.14.0
- ESLint >= 9.0.0
- Prettier >= 3.2.0

## License

ISC
