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
 * Flattens a object that contains objects into a single level key
 * @method  flattenObject
 * @param   {object} obj object to flatten
 * @returns {object} flattened object
 */
var flattenObject = module.exports = function(obj, returnObject){
  returnObject = returnObject || {};

  Object.keys(obj).forEach(function(key){
    if(isObject(obj[key])){
      return flattenObject(obj[key], returnObject);
    } else {
      var nk = makeNewKey(key, 0, returnObject);
      returnObject[nk] = obj[key];
    }
  });

  return returnObject;
};