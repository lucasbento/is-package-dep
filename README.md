<h1 align="center">is-package-dep</h1>
<p align="center">
  Parse the closest package.json file (upwards and downwards the tree) and returns whether a package is a dependency or not.
</p>

<p align="center">
  <a href="https://travis-ci.org/lucasbento/is-package-dep"><img src="https://travis-ci.org/lucasbento/is-package-dep.svg?branch=master"></a>
  <a href="https://github.com/airbnb/javascript"><img src="https://img.shields.io/badge/code%20style-airbnb-blue.svg"></a>
  <a href="https://github.com/lucasbento/is-package-dep/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"></a>
</p>

## Why
Needed to check whether if a project has [react-native](https://github.com/facebook/react-native) as a dependency or not.

## Install

```bash
yarn add is-package-dep # or npm i is-package-dep --save
```

## Usage

```js
const isPackageDep = require('is-package-dep');

const isRNProject = isPackageDep('react-native'); // value will be either `true` or `false`
isPackageDep('react-native')
```

## API

### isPackageDep(packageName, [options])
Returns a boolean value that holds whether the package is installed or not.

#### packageName
Type: `string`
The name of the package.

#### options

##### baseDir
Type: `string`
Default: `process.cwd()`
Directory to start looking up for the `package.json` file.

## License
MIT © [Lucas Bento](https://twitter.com/lbentosilva)

---

Thanks to [Sindre Sorhus](https://github.com/sindresorhus) for [read-pkg-up](https://github.com/sindresorhus/read-pkg-up) module.
