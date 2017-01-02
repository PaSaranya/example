function hello() {
};

hello.prototype.myNumber = 2;

hello.prototype.add = function(delta) {
  if ( isNaN(delta) ) { return NaN };
  this.myNumber += delta;
  return this.myNumber;
};

module.exports = hello;
