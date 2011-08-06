'use strict';

module.exports = function (t, a) {
	t = t.call;
	a(t({}), true, "Empty {} is plain object");
	a(t({ a: true }), true, "{} with property is plain object");
	a(t({ 'prototype': 1, 'constructor': 2, '__proto__':  3 }), true,
		"{} with any property keys is plain object");
	a(t(null), false, "Null is not plain object");
	a(t('string'), false, "Primitive is not plain object");
	a(t(function (t, a) {}), false, "Function is not plain object");
	a(t(Object.create({})), false,
		"Object whose prototype is not Object.prototype is not plain object");
};
