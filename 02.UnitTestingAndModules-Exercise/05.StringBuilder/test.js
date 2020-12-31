let assert = require('chai').assert;
let StringBuilder = require('./StringBuilder');

describe('String Builder', function () {
    let sb;
    beforeEach(function () {
        sb = new StringBuilder();
    });
    describe('verifyparams', function () {
        it('should throw exception when param is not a string', function () {
            assert.throw(function () {
                new StringBuilder({});
            }, 'Argument must be а string')
        });
    });
    describe('constructor', function () {
        it('should work properly withouth argument', function () {
            assert.equal('', sb.toString());
        });
        it('should work properly with argument', function () {
            sb = new StringBuilder('asd');
            assert.equal('asd', sb.toString());
        });
    });

    describe('append', function () {
        it('should append text at the end of a string', function () {
            sb.append('asd');
            assert.equal('asd', sb.toString());
        });
    });
    describe('prepend', function () {
        it('should append text at the start of a string', function () {
            sb.prepend('asd');
            assert.equal('asd', sb.toString());
        });
    });
    describe('insertAt', function () {
        it('should insert text at index', function () {
            sb.append('asd');
            sb.insertAt('v', 1);
            assert.equal('avsd', sb.toString());
        });
    });
    describe('remove', function () {
        it('should remove text from index to length', function () {
            sb.append('avsd');
            sb.remove(0, 1);
            assert.equal('vsd', sb.toString());
        });
    });
    describe('toString', function () {
        it('should correct string', function () {
            sb.append('avsd');
            assert.equal('avsd', sb.toString());
        });
    });
});