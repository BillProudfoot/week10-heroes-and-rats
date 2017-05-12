function Hero(name, health, favfood ){
  this.name = name;
  this.health = health;
  this.favfood = favfood;
}

Hero.prototype = {

}

module.exports = Hero;

// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete