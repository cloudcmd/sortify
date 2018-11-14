'use strict';

const negative = (fn) => (...a) => -1 * fn(...a);
const not = (fn) => (a) => !fn(a);
const isDir = ({type}) => /directory/.test(type);

const ascending = (attr) => (a, b) => {
    const x = a[attr];
    const y = b[attr];
    
    if (x > y)
        return 1;
    
    if (x < y)
        return -1;
    
    return 0;
};

module.exports = sortify;

function sortify(options, files) {
    checkOptions(options);
    
    const {
        order,
        sort = 'name',
    } = options;
    
    check(files);
    checkSort(sort, order);
    
    return sortFiles(sort, order, files);
}

function compare(attr, order) {
    if (order === 'desc')
        return negative(ascending(attr));
    
    return ascending(attr);
}

function check(files) {
    const filesMsg = 'files should be an array!';
    
    if (!Array.isArray(files))
        throw Error(filesMsg);
}

function checkOptions(options) {
    if (typeof options !== 'object')
        throw Error('options should be an object!');
}

function checkSort(sort, order) {
    if (sort && typeof sort !== 'string')
        throw Error('sort should be a string!');
    
    if (order && !/^(asc|desc)$/.test(order))
        throw Error('order can be "asc" or "desc" only!');
}

function sortFiles(attr, order, array) {
    const isFile = not(isDir);
    const dirs = array
        .filter(isDir)
        .sort(compare(attr, order));
    
    const files = array
        .filter(isFile)
        .sort(compare(attr, order));
    
    return dirs.concat(files);
}

