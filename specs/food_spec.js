var assert = require('assert');
var Food = require('../food.js');

describe('Food', function() {

  var food;

  beforeEach (function (){
    food = new Food({ foodName: 'Apple', replenishment: 1});
  });

  it('should have a name', function (){
    assert.strictEqual('Apple', food.foodName);
  });

  it ('should have replenishment value', function(){
    assert.strictEqual(1, food.replenishment);
  })
  
  // body...
})