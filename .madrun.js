'use strict';

const {run} = require('madrun');

module.exports = {
    'lint': () => 'putout .',
    'fix:lint': () => run('lint', '--fix'),
    'lint:eslint:lib': () => 'eslint lib',
    'lint:eslint:test': () => 'eslint -c .eslintrc.test test --no-eslintrc',
    'report': () => 'c8 report --reporter=text-lcov | coveralls',
    'coverage': () => 'c8 npm test',
    'test': () => 'tape test/*.js',
    'watch:coverage': () => run('watcher', 'npm run coverage'),
    'watch:test': () => run('watcher', 'npm test'),
    'watcher': () => 'nodemon -w test -w lib --exec',
};
