function type (data) {
	switch (typeof data) {
		case "number": return "number"
		case "string": return "string"
		case "boolean": return "boolean"
		case "undefined": return "undefined"
		case "function": return "function"
		case "symbol": return "symbol"
		case "object":
		default:
			switch (Object.prototype.toString.call(data)) {
				case "[object Number]": return "number"
				case "[object String]": return "string"
				case "[object Boolean]": return "boolean"
				case "[object Undefined]": return "undefined"
				case "[object Null]": return "null"
				case "[object Function]": return "function"
				case "[object Array]": return "array"
				case "[object Symbol]": return "symbol"
				case "[object Promise]": return "promise"
				case "[object Error]": return "error"
				case "[object RegExp]": return "regexp"
				default: 
					if ( typeof Array !== "undefined" && data instanceof Array) return "array"
					if ( typeof Function !== "undefined" && data instanceof Function) return "function"
					if ( typeof Promise !== "undefined" && data instanceof Promise) return "promise"
					if ( typeof Error !== "undefined" && data instanceof Error) return "error"
					if ( typeof RegExp !== "undefined" && data instanceof RegExp) return "regexp"
			}
	}
	return "object"
}
exports.type = type
exports.isNumber = function (o) { return type(o) === "number" }
exports.isString = function (o) { return type(o) === "string" }
exports.isBoolean = function (o) { return type(o) === "boolean" }
exports.isUndefined = function (o) { return type(o) === "undefined" }
exports.isNull = function (o) { return type(o) === "null" }
exports.isArray = function (o) { return (Array.isArray && Array.isArray(o)) || type(o) === "array" }
exports.isFunction = function (o) { return type(o) === "function" }
exports.isGeneratorFunction = function (o) { return type(o) === "function" && ( (Function.isGenerator && Function.isGenerator(o)) || Object.prototype.toString.call(o) === "[Object GeneratorFunction]" || /^\s*(?:function)?\*/.test(o.toString()) ) }
exports.isPlainFunction = function (o) { return type(o) === "function" && !exports.isGeneratorFunction(o) }
exports.isSymbol = function (o) { return type(o) === "symbol" }
exports.isPlainObject = function (o) { return type(o) === "object" }
exports.isPromise = function (o) { return type(o) === "promise" }
exports.isError = function (o) { return type(o) === "error" }
exports.isRegExp = function (o) { return type(o) === "regexp" }

