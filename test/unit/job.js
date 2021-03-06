var chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('Tests for lib/job.js', function() {

    describe('buildParameters function', function() {

        it('should return empty array, if no argument passed', function() {
            var result = require('../../lib/job').buildParameters([]);
            expect(result).to.be.an('array').that.is.empty;
        });

        it('should properly split cli args', function() {
            var result = require('../../lib/job').buildParameters(['param1=value1','param2=value2']);
            var expected = [{name: 'param1', value: 'value1'},{name: 'param2', value: 'value2'}];

            expect(result).to.have.deep.members(expected);
        });
    });
});