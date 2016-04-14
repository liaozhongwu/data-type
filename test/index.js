'use strict'

var DataType = require("../index")
,	Test = require("test")
,	o = {}
,	cases = [
	{name: "test number one", value: 1, type: "number", funcs: ["isNumber"]},
	{name: "test number zero", value: 0, type: "number", funcs: ["isNumber"]},
	{name: "test number negative one", value: -1, type: "number", funcs: ["isNumber"]},
	{name: "test number NaN", value: NaN, type: "number", funcs: ["isNumber"]},
	{name: "test number Infinity", value: Infinity, type: "number", funcs: ["isNumber"]},
	{name: "test number negative Infinity", value: -Infinity, type: "number", funcs: ["isNumber"]},
	{name: "test new Number one", value: 1, type: "number", funcs: ["isNumber"]},
	{name: "test new Number zero", value: 0, type: "number", funcs: ["isNumber"]},
	{name: "test new Number negative one", value: -1, type: "number", funcs: ["isNumber"]},
	{name: "test new Number NaN", value: NaN, type: "number", funcs: ["isNumber"]},
	{name: "test new Number Infinity", value: Infinity, type: "number", funcs: ["isNumber"]},
	{name: "test new Number negative Infinity", value: -Infinity, type: "number", funcs: ["isNumber"]},
	{name: "test string empty", value: "", type: "string", funcs: ["isString"]},
	{name: "test string normal", value: "string", type: "string", funcs: ["isString"]},
	{name: "test new String empty", value: new String(""), type: "string", funcs: ["isString"]},
	{name: "test new String normal", value: new String("string"), type: "string", funcs: ["isString"]},
	{name: "test boolean true", value: true, type: "boolean", funcs: ["isBoolean"]},
	{name: "test boolean false", value: false, type: "boolean", funcs: ["isBoolean"]},
	{name: "test new Boolean true", value: new Boolean(true), type: "boolean", funcs: ["isBoolean"]},
	{name: "test new Boolean false", value: new Boolean(false), type: "boolean", funcs: ["isBoolean"]},
	{name: "test undefined", value: undefined, type: "undefined", funcs: ["isUndefined"]},
	{name: "test null", value: null, type: "null", funcs: ["isNull"]},
	{name: "test symbol", value: Symbol(), type: "symbol", funcs: ["isSymbol"]},
	{name: "test array", value: [], type: "array", funcs: ["isArray"]},
	{name: "test new Array", value: new Array(), type: "array", funcs: ["isArray"]},
	{name: "test symbol", value: Symbol(), type: "symbol", funcs: ["isSymbol"]},
	{name: "test object", value: {}, type: "object", funcs: ["isPlainObject"]},
	{name: "test new Object", value: new Object(), type: "object", funcs: ["isPlainObject"]},
	{name: "test Object create", value: Object.create({}), type: "object", funcs: ["isPlainObject"]},
	{name: "test function", value: function () {}, type: "function", funcs: ["isFunction", "isPlainFunction"]},
	{name: "test new Function", value: new Function(""), type: "function", funcs: ["isFunction", "isPlainFunction"]},
	{name: "test generator function", value: function* () {}, type: "function", funcs: ["isFunction", "isGeneratorFunction"]},
	{name: "test promise", value: new Promise(function (resolve, reject) {}), type: "promise", funcs: ["isPromise"]},
	{name: "test error", value: new Error(""), type: "error", funcs: ["isError"]},
	{name: "test regexp", value: /^.*$/, type: "regexp", funcs: ["isRegExp"]},
	{name: "test new RegExp", value: new RegExp("^.*$"), type: "regexp", funcs: ["isRegExp"]},
]
,	funcs = [
	"isNumber",
	"isString",
	"isBoolean",
	"isUndefined",
	"isNull",
	"isArray",
	"isFunction",
	"isGeneratorFunction",
	"isPlainFunction",
	"isSymbol",
	"isPlainObject",
	"isPromise",
	"isError",
	"isRegExp"
]

function createCase (c) {
	o[c.name] = function (assert) {
		assert.equal(DataType.type(c.value), c.type, "Pass")
	}
	for (var i = 0; i < funcs.length; ++i) {
		(function (func) {
			o[c.name + " " + func] = function (assert) {
				assert.equal(DataType[func](c.value), c.funcs.indexOf(func) >= 0 , "Pass")
			}
		})(funcs[i])
	}
}
for (var i = 0; i < cases.length; ++i) {
	createCase(cases[i])
}
Test.run(o)