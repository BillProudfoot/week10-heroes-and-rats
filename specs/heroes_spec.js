var assert = require('assert');
var Hero = require('../heroes.js');
var Food = require('../food.js');


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
  });
  
  it ('should have favourite food', function(){
    assert.strictEqual('Chicken', hero.favfood)
  });

  it ('should say name', function (){
    var hero = new Hero({name: 'Superman', health: 2, favfood: 'Cheese'});
    hero.name;
    assert.strictEqual('Superman', hero.name);
  });

 it ( 'should eat food and health goes up', function(){
  var hero = new Hero({name: 'Superman', health: 2, favfood: 'Cheese'});
  food1 = new Food({ foodName: 'Apple', replenishment: 1});
  hero.eatFood(food1);
//   eatFood: function (){
//     hero.health = hero.health += food1.replenishment;
// }
  assert.strictEqual(3, hero.health);
 });

it (' health goes up 1.5 times if eats favorite food', function(){
  var hero = new Hero({name: 'Superman', health: 2, favfood: 'Cheese'});
  food5 = new Food({ foodName: 'Cheese', replenishment: 1});
  hero.eatFood(food5);
  assert.strictEqual(3.5, hero.health);
})




  // body...
});


// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete
// Extend your hero.

// A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.