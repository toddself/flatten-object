[![build status](https://secure.travis-ci.org/toddself/flatten-object.png)](http://travis-ci.org/toddself/flatten-object)

# flatten-object
Flattens nested javascript objects into a single level. Enumerates keys that collide.

## Usage
`npm install flatten-object`

```javascript
> var flattenObject = require('flatten-object');
> var nested  = {foo: 'bar', baz: {foo: 'bar'}};
> flattenObject(nested):
{
    foo_0: 'bar',
    foo_1: 'bar'
};
```

## API

### flattenObject(object, maxDepth)

```
/**
 * Flatten an object down to a optionally specified maximum depth
 * @method  exports
 * @param   {object} obj Object to flatten
 * @param   {integer} [maxDepth=0] Maximum depth to recurse to. Zero is unlimited.
 * @returns {object} flattened object
 */
```

## License
[MIT license](/LICENSE), Copyright © 2014 Todd Kennedy