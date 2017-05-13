var assert = require('assert');
var Food = require('../food.js');

describe('Food', function() {

  var food;

  beforeEach (function (){
    food1 = new Food({ foodName: 'Apple', replenishment: 1});
    food2 = new Food({ foodName: 'Chicken', replenishment: 1.5});
    food3 = new Food({ foodName: 'Steak', replenishment: 2});
    food4 = new Food({ foodName: 'Bread', replenishment: 0.5});
  });

  it('should have a name', function (){
    assert.strictEqual('Apple', food1.foodName);
    assert.strictEqual('Chicken', food2.foodName);
    assert.strictEqual('Steak', food3.foodName);
    assert.strictEqual('Bread', food4.foodName);
  });

  it ('should have replenishment value', function(){
    assert.strictEqual(1, food1.replenishment);
    assert.strictEqual(1.5, food2.replenishment);
    assert.strictEqual(2, food3.replenishment);
    assert.strictEqual(0.5, food4.replenishment);
  })
  
  // body...
})