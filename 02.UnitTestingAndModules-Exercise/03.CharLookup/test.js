let assert = require('chai').assert;
let lookupChar = require('./lookUpChar').lookupChar;

describe('lookUpChar', function () {
    it('should return undefined with incorrect first param', function () {
        assert.equal(undefined, lookupChar(5, 0));
    });
    it('should return undefined with incorrect second param', function () {
        assert.equal(undefined, lookupChar('asd', 'dsa'));
    });
    it('should return incorrect index with first param length', function () {
        assert.equal('Incorrect index', lookupChar('asd', 4));
    });
    it('should return incorrect index with second param lower then 0', function () {
        assert.equal('Incorrect index', lookupChar('asd', -1));
    });
    it('should return correct character', function () {
        assert.equal('a', lookupChar('dfaff', 2));
    });


});