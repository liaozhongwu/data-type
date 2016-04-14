(function (context) {
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
					case "[object Symbol]": return "symbolin"
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
	function isGenerator (o) {
		return (Function.isGenerator && Function.isGenerator(o)) || Object.prototype.toString.call(o) === "[Object GeneratorFunction]" || /^\s*(?:function)?\*/.test(o.toString()) 
	}
	var exp = {
		type: type,
		isNumber: function (o) { return type(o) === "number" },
		isString: function (o) { return type(o) === "string" },
		isBoolean: function (o) { return type(o) === "boolean" },
		isUndefined: function (o) { return type(o) === "undefined" },
		isNull: function (o) { return type(o) === "null" },
		isArray: function (o) { return (Array.isArray && Array.isArray(o)) || type(o) === "array" },
		isFunction: function (o) { return type(o) === "function" },
		isPlainFunction: function (o) { return type(o) === "function" && !isGenerator(o) },
		isGeneratorFunction: function (o) { return type(o) === "function" && isGenerator(o) },
		isSymbol: function (o) { return type(o) === "symbol" },
		isPlainObject: function (o) { return type(o) === "object" },
		isPromise: function (o) { return type(o) === "promise" },
		isError: function (o) { return type(o) === "error" },
		isRegExp: function (o) { return type(o) === "regexp" }
	}
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = exp
	} else if (typeof define === "function" && define.amd) {
		define("DataType", [], function () { return exp })
	} else {
		context.DataType = exp
	}
})(this)


