'use strict';

var isObject = require('lodash.isobject');

/**
 * Recursively increment a number to generate a unique key for a model
 * @method  makeNewKey
 * @param   {string} key base key name
 * @param   {integer} itr the incremental iterator
 * @param   {object} obj the simple object graph to check
 * @returns {string} unique key name
 */
function makeNewKey(key, itr, obj){
  var newKey = [key, '_', itr].join('');
  if(Object.keys(obj).indexOf(newKey) === -1){
    return newKey;
  } else {
    return makeNewKey(key, ++itr, obj);
  }
}

/**
 * Flatten an object down to a optionally specified maximum depth
 * @method  exports
 * @param   {object} obj Object to flatten
 * @param   {integer} [maxDepth=0] Maximum depth to recurse to. Zero is unlimited.
 * @returns {object} flattened object
 */
var flattenObject = module.exports = function(obj, maxDepth, currDepth, returnObject){
  returnObject = returnObject || {};
  maxDepth = maxDepth || 0;
  currDepth = currDepth || 0;
  // if we have a zero maxDepth, we want to go until we either reach bottom
  // or we've hit max recursion in the interpreter, so keep moving the goal
  var _maxDepth = maxDepth === 0 ? currDepth+1 : maxDepth;

  Object.keys(obj).forEach(function(key){
    if(isObject(obj[key]) && _maxDepth > currDepth){
      return flattenObject(obj[key], maxDepth, ++currDepth, returnObject);
    } else {
      var nk = makeNewKey(key, 0, returnObject);
      returnObject[nk] = obj[key];
    }
  });

  return returnObject;
};