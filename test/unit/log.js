var chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('Tests for lib/log.js', function() {

    describe('json function', function() {

        it('should throw TypeError if no argument passed', function() {
            expect(function() {
                require('../../lib/log').json();
            }).to.throw(TypeError);
        });

        it('should throw TypeError if argument passed is not an object', function() {
            expect(function() {
                require('../../lib/log').json('something');
            }).to.throw(TypeError);
        });

        it('should not set process exitCode to 1, if error property is not contained', function() {
            require('../../lib/log').json({ foo : 'bar' });
            assert(process.exitCode !== 1, 'process.exitCode must not be 1');
        });

        it('should set process exitCode to 1, if error property is contained', function() {
            require('../../lib/log').json({ error : 'something' });
            assert(process.exitCode === 1, 'process.exitCode must be 1');
        });
    });
});