var Hero = function(options){
  this.name = options.name;
  this.health = options.health;
  this.favfood = options.favfood;
}

Hero.prototype = { 
  eatFood: function (food){
    var multiplier = 1;
    if(food.foodName === this.favfood){
      multiplier = 1.5;
    }
    return this.health = this.health += (food.replenishment * multiplier);
  }
};

module.exports = Hero;

// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete