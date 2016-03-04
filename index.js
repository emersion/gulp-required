var through = require('through2');
var detective = require('detective');

module.exports = function (opts) {
	return through.obj(function (file, encoding, done) {
		if (file.isDirectory()) return done(null, []);
		if (!file.isBuffer()) return done('Input needs to be buffered');

		var deps = detective(file.contents, opts);

		done(null, deps);
	});
};
