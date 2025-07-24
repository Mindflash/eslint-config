// Example usage of @mindflash-ops/eslint-config
import sharedConfig from '@mindflash-ops/eslint-config/eslint.config.js';

export default [
  ...sharedConfig,
  {
    rules: {
      // Project-specific overrides
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'max-len': ['error', { code: 120 }],
    },
  },
];
