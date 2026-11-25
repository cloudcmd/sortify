# Sortify [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[NPMIMGURL]: https://img.shields.io/npm/v/@cloudcmd/sortify.svg?style=flat
[BuildStatusURL]: https://github.com/cloudcmd/sortify/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/cloudcmd/sortify/workflows/Node%20CI/badge.svg
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]: https://npmjs.org/package/@cloudcmd/sortify "npm"
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]: https://coveralls.io/github/cloudcmd/sortify?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/cloudcmd/sortify/badge.svg?branch=master&service=github

Sort directory content received by [readify](https://github.com/coderaiser/readify) by name, size, date.

## Install

```
npm i @cloudcmd/sortify
```

## API

### sortify(options, files)

- **options** - `object` can contain:
  - `sort` - sort by: name, size, date, time (sorted as date)
  - `order` - "asc" or "desc" for ascending and descending order (default: "asc")

- **files** - `files list`

## Examples

```js
import {sortify} from '@cloudcmd/sortify';

const files = [{
    name: 'readify.js',
    size: 3735,
    date: new Date('2016-11-21T13:37:55.275Z'),
    owner: 1000,
    mode: 33_204,
    type: 'file',
}, {
    name: 'sortify.js',
    size: 4735,
    date: new Date('2016-11-21T13:37:55.275Z'),
    owner: 1000,
    mode: 33_204,
    type: 'file',
}];

const sort = 'size';
const order = 'desc';

sortify({sort, order}, files);
// output
[{
    name: 'sortify.js',
    size: 4735,
    date: new Date('2016-11-21T13:37:55.275Z'),
    owner: 1000,
    mode: 33_204,
    type: 'file',
}, {
    name: 'readify.js',
    size: 3735,
    date: new Date('2016-11-21T13:37:55.275Z'),
    owner: 1000,
    mode: 33_204,
    type: 'file',
}];
```

## License

MIT
