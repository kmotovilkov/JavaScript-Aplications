let {addFive, subtractTen, sum} = require('./mathEnforcer');
let assert = require('chai').assert;

describe('Add Five', function () {
    it('should return undefined with incorrect type', function () {
        assert.equal(undefined, addFive('asd'))
    });
    it('should return correct number', function () {
        assert.equal(10, addFive(5))
    });
});
describe('Substract Ten', function () {
    it('should return undefined with incorrect type', function () {
        assert.equal(undefined, subtractTen('asd'))
    });
    it('should return correct value', function () {
        assert.equal(0, subtractTen(10))
    });
});
describe('Sum', function () {
    it('should return undefined with incorrect first param', function () {
        assert.equal(undefined, sum('asd', 5))
    });
    it('should return undefined with incorrect second param', function () {
        assert.equal(undefined, sum(5, 'asd'))
    });
    it('should return correct sum', function () {
        assert.equal(15, sum(5, 10))
    });

});

