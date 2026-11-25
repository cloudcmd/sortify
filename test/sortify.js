'use strict';

const {tryCatch} = require('try-catch');
const {test} = require('supertape');
const sortify = require('..');

const {
    testDir,
    libDir,
    readifyFile,
    sortifyFile,
} = require('./fixture');

test('result: should be sorted by name folders then files', (t) => {
    const files = [
        sortifyFile,
        readifyFile,
        libDir,
        testDir,
    ];
    
    const result = sortify({}, files);
    
    const expected = [
        libDir,
        testDir,
        readifyFile,
        sortifyFile,
    ];
    
    t.deepEqual(result, expected);
    t.end();
});

test('sortify: sort: name', (t) => {
    const files = [
        sortifyFile,
        readifyFile,
        libDir,
        testDir,
    ];
    
    const name = true;
    const result = sortify({name}, files);
    
    const expected = [
        libDir,
        testDir,
        readifyFile,
        sortifyFile,
    ];
    
    t.deepEqual(result, expected);
    t.end();
});

test('sortify: sort: size (with dir)', (t) => {
    const expected = [
        testDir,
        libDir,
        readifyFile,
        sortifyFile,
    ];
    
    const list = [
        sortifyFile,
        testDir,
        readifyFile,
        libDir,
    ];
    
    const sort = 'size';
    const result = sortify({sort}, list);
    
    t.deepEqual(result, expected);
    t.end();
});

test('sortify: sort: name: desc', (t) => {
    const expected = [
        testDir,
        libDir,
        sortifyFile,
        readifyFile,
    ];
    
    const files = [
        sortifyFile,
        testDir,
        readifyFile,
        libDir,
    ];
    
    const sort = 'name';
    const order = 'desc';
    
    const result = sortify({sort, order}, files);
    
    t.deepEqual(result, expected);
    t.end();
});

test('sortify sort: size asc', (t) => {
    const expected = [
        testDir,
        libDir,
        readifyFile,
        sortifyFile,
    ];
    
    const files = [
        sortifyFile,
        testDir,
        readifyFile,
        libDir,
    ];
    
    const sort = 'size';
    const result = sortify({sort}, files);
    
    t.deepEqual(result, expected);
    t.end();
});

test('arguments: exception when no options', (t) => {
    const [error] = tryCatch(sortify);
    t.equal(error.message, 'options should be an object!', 'should throw when no options');
    t.end();
});

test('arguments: exception when no files', (t) => {
    const [error] = tryCatch(sortify, {});
    t.equal(error.message, 'files should be an array!', 'should throw when no files');
    t.end();
});

test('sortify: options: order: wrong', (t) => {
    const order = 'wrong';
    const [error] = tryCatch(sortify, {order}, []);
    
    t.equal(error.message, 'order can be "asc" or "desc" only!', 'should throw when order is wrong');
    t.end();
});

test('sortify: options: sort: wrong', (t) => {
    const [error] = tryCatch(sortify, {sort: 5}, []);
    t.equal(error.message, 'sort should be a string!', 'should throw when sortBy not string');
    t.end();
});
