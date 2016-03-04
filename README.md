# gulp-required

Find all `require()` calls.

## Usage

```js
var gulp = require('gulp');
var buffer = require('gulp-buffer');
var browserify = require('browserify');
var required = require('gulp-required');

var b = browserify();

gulp.task('required', function () {
	return gulp.src(['js/**'])
	.pipe(buffer())
	.pipe(required())
	.on('data', function (deps) {
		b.require(deps);
	});
});
```

## Licence

MIT
