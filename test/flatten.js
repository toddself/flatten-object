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

test('should flatten object', function(t) {
  var flat = flattenObject(nestedObject);
  var flatKeys = Object.keys(flat);
  flatKeys.forEach(function(key) {
    t.ok(!isObject(flat[key]), 'no objects');
    t.ok(key.match(/_\d/), '_digit matches');
  });
  t.equal(flatKeys.length, 3, 'should be three');
  t.end();
});

test('should partialy flatten object', function(t) {
  var flat = flattenObject(nestedObject, 1);
  var flatKeys = Object.keys(flat);
  var nestedObjects = 0;
  flatKeys.forEach(function(key) {
    if (key === 'dude_0') {
      t.ok(isObject(flat[key]), 'want an object');
      ++nestedObjects;
    } else {
      t.ok(!isObject(flat[key]), 'want no object');
    }
  });
  t.equal(nestedObjects, 1, 'should only be a single nested object');
  t.equal(flatKeys.length, 3, 'should have three');
  t.end();
});

test('should let you specify a delimiter', function(t) {
  var flat = flattenObject(nestedObject, 0, '.');
  var flatKeys = Object.keys(flat);
  flatKeys.forEach(function(key) {
    t.ok(!isObject(flat[key]), 'no objects');
    t.ok(key.match(/\.\d/), '.digit matches');
  });
  t.equal(flatKeys.length, 3, 'should be three');
  t.end();
});
