var assert = require('assert');
var Hero = require('../heroes.js');

describe('Hero', function() {

  var hero;

  beforeEach (function (){
    hero = new Hero({ name: 'Batman', health: 1, favfood: 'Chicken'});
  });

  it('should have a name', function (){
    assert.strictEqual('Batman', hero.name);
  });

  it ('should have health value', function(){
    assert.strictEqual(1, hero.health);
  })
  
  it ('should have favourite food', function(){
    assert.strictEqual('Chicken', hero.favfood)
  })

  it ('should say name', function (){
    var hero = new Hero({name: 'Superman', health: 2, favfood: 'Cheese'});
    hero.name;
    assert.strictEqual('Superman', hero.name);
  })

  

  // body...
})


// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete