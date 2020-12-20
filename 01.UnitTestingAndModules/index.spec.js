const lib = require('./index');
const expect = require('chai').expect;

describe('Sum Tests', function () {

    it('should return NaN when the arg is a strings', function () {
        const arg = 'test';
        const result = lib.sum(arg);
        expect(result).to.be.NaN;
    });

    it('should return the sum of all items of a valid number string array', function () {
        const arg = [ '1', '2', '3' ];
        const result = lib.sum(arg);
        expect(result).to.eq(6);
    });

    it('should return NaN if any we have an invalid number string', function () {
        const arg = [ '1', '2', 'asdfg' ];
        const result = lib.sum(arg);
        expect(result).to.be.NaN;
    });
});


describe('isSymmetric Tests', function () {
    it('should be false when input is not an array', function () {
        const input = 'asdf';
        const result = lib.isSymmetric(input);
        expect(result).to.be.false;
    });

    it('should not be symmetric', function () {
        const input = [ 1, 2, 3 ];
        const result = lib.isSymmetric(input);
        expect(result).to.be.false;
    });

    it('should be symmetric', function () {
        const input = [ 1, 2, 1 ];
        const result = lib.isSymmetric(input);
        expect(result).to.be.true;
    });
});


describe('rgbToHexColor Tests', function () {
    it('should return undefined when first args are not an int', function () {
        const input = [ 'green', 244, 233 ];
        const result = lib.rgbToHexColor(...input);
        expect(result).to.eq(undefined);
    });
    it('should return undefined when second args are not an int', function () {
        const input = [ 321, 'blue', 233 ];
        const result = lib.rgbToHexColor(...input);
        expect(result).to.eq(undefined);
    });
    it('should return undefined when third args are not an int', function () {
        const input = [ 244, 233, 'black' ];
        const result = lib.rgbToHexColor(...input);
        expect(result).to.eq(undefined);
    });
    it('should convert rgb to hex', function () {
        const input = [ 252, 186, 3 ];
        const result = lib.rgbToHexColor(...input);
        expect(result).to.eq('#FCBA03');
    });
});


describe('createCalculator Tests', function () {
    it('should create calculator successfully', function () {
        const result = lib.createCalculator();
        expect(result.get()).to.exist;
        expect(result.get()).to.eq(0);
    });
    it('should test calculator add', function () {
        const result = lib.createCalculator();
        result.add(5);
        expect(result.get()).to.eq(5);
    });
    it('should test calculator subtract', function () {
        const result = lib.createCalculator();
        result.add(15);
        result.subtract(5);
        expect(result.get()).to.eq(10);
    });

});
