'use strict';

const sortify = require('..');
const test = require('tape');

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
    
    t.deepEqual(result, expected, 'should equal');
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
    
    t.deepEqual(result, expected, 'should equal');
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
    
    t.deepEqual(result, expected, 'should equal');
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
    
    const result = sortify({sort, order}, files)
    
    t.deepEqual(expected, result, 'should equal');
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
    const result = sortify({sort}, files)
    
    t.deepEqual(expected, result, 'should equal');
    t.end();
});

test('arguments: exception when no options', t => {
    t.throws(sortify, /options should be an object!/, 'should throw when no options');
    t.end();
});

test('arguments: exception when no files', t => {
    const noCallback = () => sortify({});
    
    t.throws(noCallback, /files should be an array!/, 'should throw when no files');
    t.end();
});

test('sortify: options: order: wrong', (t) => {
    const order = 'wrong';
    const fn = () => sortify({order}, []);
    
    t.throws(fn, /order can be "asc" or "desc" only!/, 'should throw when order is wrong');
    t.end();
});

test('sortify: options: sort: wrong', (t) => {
    const fn = () => sortify({sort: 5}, []);
    
    t.throws(fn, /sort should be a string!/, 'should throw when sortBy not string');
    t.end();
});


