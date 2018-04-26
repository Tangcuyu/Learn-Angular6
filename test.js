var book = {};

Object.defineProperties(book, {
	_year: {
		value:2004
	}
});

var des = Object.getOwnPropertyDescriptor(book, "_year");

console.log(des.configurable);