var chai = require('chai');
var expect = chai.expect
  , should = chai.should();
var NumberBlackBox = require(__dirname+'/../node_ex_test.js');

describe('NumberBlackBox Unit tests', function() {

  var numberBlackBox = new NumberBlackBox();

 it('add() should return resulting number', function() {
    expect(numberBlackBox.add(1)).to.equal(3);
  });
  
  it('add() should return NaN if a NaN value is passed in as argument', function() {
    expect(numberBlackBox.add('hello')).to.be.NaN;
  });
  
  });