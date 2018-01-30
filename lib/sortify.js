'use strict';

const negative = (fn) => (...a) => -1 * fn(...a);
const not = (fn) => (a) => !fn(a);
const isDir = (file) => file.size === 'dir';

const ascending = (attr) => (a, b) => {
    return a[attr] > b[attr] ? 1 : -1;
};

module.exports = sortify;

function sortify(options, files) {
    checkOptions(options);
    
    const type = options.type;
    const order = options.order;
    const sort = options.sort || 'name';
    
    check(files, type);
    checkSort(sort, order);
    
    return sortFiles(sort, order, files);
}

function compare(attr, order) {
    if (order === 'desc')
        return negative(ascending(attr));
    
    return ascending(attr);
}

function check(files, type) {
    const isString = (a) => typeof a === 'string';
    
    const filesMsg = 'files should be an array!';
    const typeMsg = 'type should be a string or not to be defined!';
    
    if (!Array.isArray(files))
        throw Error(filesMsg);
    
    if (type && !isString(type))
        throw Error(typeMsg);
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

