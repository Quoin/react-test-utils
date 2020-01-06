# Quoin react test utils

Utility library for testing react projects.

It makes sure that [Chai](https://www.chaijs.com/) uses some plugins:

- [chai-immutable](https://www.npmjs.com/package/chai-immutable)
- [dirty-chai](https://www.npmjs.com/package/dirty-chai)

## API

### expect()

See [Chai](https://www.chaijs.com/api/bdd/) `expect`.


### mount()

See [Enzyme's moun()](https://airbnb.io/enzyme/docs/api/mount.html).


### render()

See [Enzyme's render()](https://airbnb.io/enzyme/docs/api/render.html).


### request()


### sandbox()

See [Sinon's sandox()](https://sinonjs.org/releases/latest/).


### shallow()

See [Enzyme's shallow()](https://airbnb.io/enzyme/docs/api/shallow.html).


### spy()

See [Sinon's spy()](https://sinonjs.org/releases/latest/).


### stub()

See [Sinon's stub()](https://sinonjs.org/releases/latest/).


### unexpectedFlow()


### verifyProperties(clone, propertyType, properties)

This function verifies that all the `properties` are defined on the `clone`. It
also deletes the property from the `clone`, making it useful in the following
context.

The `propertyType` are values that would be used in [Chai .to.be.a()](https://www.chaijs.com/api/bdd/#method_a).

```javascript
it(`defines known properties`, () => {
  const clone = { ...someObject };

  verifyProperties(clone, 'string', [
    'aStringProperty',
    'anotherStringProperty'
  ]);

  verifyProperties(clone, 'function', [
    'afunction',
    'anotherFunction'
  ]);

  verifyProperties(clone, 'object', [
    'anObject',
    'anotherObject'
  ]);

  expect(clone).to.be.empty();
});
```
