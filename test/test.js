const assert = require('assert');

describe('Array', function() {
    describe('#indexof()', function() {
        it('should return value -1 when value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});