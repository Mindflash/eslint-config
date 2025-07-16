# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-07-15

### Added

- 🚀 **Latest Node.js LTS+ support** - Updated minimum Node.js version to v24.4.1 with forward compatibility
- 📦 **Node.js plugin** - Added `eslint-plugin-n` for Node.js specific best practices and deprecation detection
- 🧪 **Test-specific configuration** - Relaxed rules for test files (`*.test.js`, `*.spec.js`)
- ⚙️ **Config file flexibility** - Special rules for configuration files (`*.config.js`, `config/**`)
- 📋 **Enhanced build process** - Added comprehensive linting and validation to CI/CD
- 🎨 **Prettier integration** - Uses existing `.prettierrc` for consistent formatting
- 📝 **Comprehensive documentation** - Enhanced README with detailed configuration information

### Changed

- ⬆️ **ESLint v9.0+** - Updated minimum ESLint version for flat config support
- ⬆️ **Prettier v3.2+** - Updated Prettier version requirement
- 🔧 **ECMAScript latest** - Set to 'latest' for automatic future JavaScript feature support
- 📈 **Comprehensive rules** - Extensive modern JavaScript and Node.js best practices
- 🏗️ **Enhanced build specs** - Improved CI/CD with proper validation and checks
- 📦 **Version bump to 2.0.0** - Major version update for breaking changes
- 🔄 **Future-proof configuration** - Designed to automatically support upcoming Node.js versions

### Enhanced

- 🔍 **Modern JavaScript patterns** - Complete set of rules for modern JS development
- 🎯 **Node.js best practices** - Deprecation detection, path handling, and Buffer security
- 🚀 **Async/await handling** - Comprehensive async patterns and Promise handling
- 📊 **Code quality** - Extensive rules for variables, equality, security, and imports
- 🎨 **Code style** - Consistent formatting with comprehensive spacing and style rules
- 🔮 **Forward compatibility** - Automatically adapts to newer Node.js and ECMAScript features

### Breaking Changes

- 🔴 **Node.js v22+ minimum** - Projects using older Node.js versions need to upgrade
- 🔴 **New peer dependencies** - Requires `eslint-plugin-n` for Node.js best practices
- 🔴 **ESLint v9 required** - Uses flat config format, incompatible with older ESLint versions

## [1.0.0] - Previous Release

### Added

- Initial ESLint configuration for Node.js v22+
- ESLint v9 flat config format
- Basic JavaScript best practices
- Prettier integration
