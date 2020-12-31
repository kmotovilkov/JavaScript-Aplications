let assert = require('chai').assert;
let PaymentPackage = require('./paymentPackage');

describe('Payment Package', function () {
    let payPack;
    describe('constructor', function () {
        it('should constructor work properly with 2 params', function () {
            payPack = new PaymentPackage('Asdf', 10);
            let expected = new PaymentPackage('Asdf', 10);
            assert.deepEqual(payPack, expected);
        });
        it('should throw exeption with incorrect name', function () {
            assert.throw(function () {
                payPack = new PaymentPackage(10, 10);
            }, 'Name must be a non-empty string')
        });
        it('should throw exeption with incorrect name length 0', function () {
            assert.throw(function () {
                payPack = new PaymentPackage('', 10);
            }, 'Name must be a non-empty string')
        });
        it('should throw exeption with incorrect value', function () {
            assert.throw(function () {
                payPack = new PaymentPackage('asd', 'das');
            }, 'Value must be a non-negative number')
        });
        it('should throw exeption with incorrect value lower then 0', function () {
            assert.throw(function () {
                payPack = new PaymentPackage('asd', -5);
            }, 'Value must be a non-negative number')
        });
    });
});