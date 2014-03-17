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

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>


*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->
