'use strict';

var test = require('tap').test;
var flattenObject = require('../index');
var isObject = require('lodash.isobject');

var nestedObject = {
  hi: 1,
  dude: {
    hi: 2,
    dude: {
      hi: 3
    }
  }
};

test('should flatten object', function(t){
  var flat = flattenObject(nestedObject);
  var flatKeys = Object.keys(flat);
  flatKeys.forEach(function(key) {
    t.ok(!isObject(flat[key]), 'no objects');
    t.ok(key.match(/_\d/), '_digit matches');
  });
  t.equal(flatKeys.length, 3, 'should be three');
  t.end();
});