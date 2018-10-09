# Sortify [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]:                https://img.shields.io/npm/v/@cloudcmd/sortify.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/cloudcmd/sortify/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/cloudcmd/sortify.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/@cloudcmd/sortify "npm"
[BuildStatusURL]:           https://travis-ci.org/cloudcmd/sortify  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/cloudcmd/sortify "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

Sort directory content received by [readify](https://github.com/coderaiser/readify) by name, size, date.

## Install

```
npm i @cloudcmd/sortify
```

## API

### sortify(options, files)

- **options** - `object` can contain:
  - `sort` - sort by: name, size, date
  - `order` - "asc" or "desc" for ascending and descending order (default: "asc")
- **files** - `files list`

## Examples

```js
const files = [{
    name: 'readify.js',
    size: 3735,
    date: 2016-11-21T13:37:55.275Z,
    owner: 1000,
    mode: 33204,
    type: 'file',
}, {
    name: 'sortify.js',
    size: 4735,
    date: 2016-11-21T13:37:55.275Z,
    owner: 1000,
    mode: 33204,
    type: 'file',
}];

const sort = 'size';
const order ='desc';

sortify({sort, order}, files);
// output
[{
    name: 'sortify.js',
    size: 4735,
    date: 2016-11-21T13:37:55.275Z,
    owner: 1000,
    mode: 33204,
    type: 'file'
}, {
    name: 'readify.js',
    size: 3735,
    date: 2016-11-21T13:37:55.275Z,
    owner: 1000,
    mode: 33204,
    type: 'file'
}]
```

## License

MIT

[CoverageURL]:              https://coveralls.io/github/cloudcmd/sortify?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/cloudcmd/sortify/badge.svg?branch=master&service=github

