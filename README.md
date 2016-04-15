# data-type
---
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/data-type.svg?style=flat
[npm-url]: https://npmjs.org/package/data-type

## Install

```
npm i data-type --save
```

```
<script type="text/javascript" src="/type.js"></script>
```

## Usage

```js
var DataType = require('data-type') 

// get type
DataType.type(1) // number
DataType.type("") // string
DataType.type(true) // boolean
DataType.type(undefined) // undefined
DataType.type(null) // null
DataType.type([]) // array
DataType.type({}) // object
DataType.type(function () {}) // function
DataType.type(Symbol()) // symbol
DataType.type(new Promise(function (resolve, reject) {})) // promise
DataType.type(new Error()) // error
DataType.type(new RegExp()) // regexp

// is type
DataType.isNumber(1) // true
DataType.isNumber(new Number(0)) // true
DataType.isString("") // true
DataType.isString(new String()) // true
DataType.isBoolean(true) // true
DataType.isUndefined(undefined) // true
DataType.isNull(null) // true
DataType.isArray([]) // true
DataType.isArray(new Array()) // true
DataType.isPlainObject({}) // true
DataType.isPlainObject(Object.create({})) // true
DataType.isFunction(function () {}) // true
DataType.isPlainFunction(function () {}) // true
DataType.isGeneratorFunction(function* () {}) // true
DataType.isPlainFunction(function* () {}) // false
DataType.isGeneratorFunction(function () {}) // false
DataType.isSymbol(Symbol()) // true
DataType.isPromise(new Promise(function (resolve, reject) {})) // true
DataType.isError(new Error()) // true
DataType.isRegExp(/^.*$/) // true
```

## API
| key | description | params | return | 
|-----|-------------|--------|--------|
| type | get type | data | string |
| isNumber | is number | data | true,false |
| isString | is string  | data | true,false |
| isBoolean | is boolean | data | true,false |
| isUndefined | is undefined | data | true,false |
| isNull | is null | data | true, false |
| isArray | is array | data | true, false |
| isFunction | is function | data | true,false |
| isGeneratorFunction | is generator function | data | true,false |
| isPlainFunction | is plain function | data | true,false |
| isPlainObject | is plain object | data | true,false |
| isSymbol | is symbol | data | true,false |
| isPromise | is promise | data | true,false |
| isError | is error | data | true,false |
| isRegExp | is regexp | data | true,false |

## Test

```
npm test
```

## License

data-type is released under the MIT license.
