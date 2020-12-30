let assert = require('chai').assert;
let app = require('./isOddOrEven');

describe('Is odd or even', function () {
    it('should return undefined with param different from string', function () {
        assert.equal(undefined, app.isOddOrEven(5));
    });
    it('should return even', function () {
        assert.equal('even', app.isOddOrEven('word'));
    });
    it('should return odd', function () {
        assert.equal('odd', app.isOddOrEven('words'));
    });
});