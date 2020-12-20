const lib = require('./index');
const expect=require('chai').expect;

describe('Functions Lib Test', function () {

it('should return NaN when the arg is a strings', function(){
    const arg='test';
    const result=lib.sum(arg);
    expect(result).to.be.NaN;
});
});