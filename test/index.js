var test = require('ava');
var convert = require('../lib');

test('convert', function(t) {
  t.is(convert(6), 'VI');
});
