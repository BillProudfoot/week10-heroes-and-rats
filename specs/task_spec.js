var assert = require('assert');
var Task = require('../task.js');

describe('Task', function() {

  var task;

  beforeEach (function (){
    task1 = new Task({ todo: 'Stop Train', difficulty: 2, urgency: 3, reward: 3, isDone: false});
    task2 = new Task({ todo: 'Stop Earthquake', difficulty: 2, urgency: 5, reward: 5, isDone: false});
    task3 = new Task({ todo: 'Stop Car', difficulty: 1, urgency: 2, reward: 2, isDone: false});
    task4 = new Task({ todo: 'Stop Bike', difficulty: 0.5, urgency: 0.5, reward: 1, isDone: false});
  });

  it(' task should have a name', function (){
    assert.strictEqual('Stop Train', task1.todo);
    assert.strictEqual('Stop Earthquake', task2.todo);
    assert.strictEqual('Stop Car', task3.todo);
    assert.strictEqual('Stop Bike', task4.todo);
  });

  it('should have a difficulty', function(){
    assert.strictEqual(2, task1.difficulty);
    assert.strictEqual(2, task2.difficulty);
    assert.strictEqual(1, task3.difficulty);
    assert.strictEqual(0.5, task4.difficulty);
  });

  it('should have an urgency', function(){
    assert.strictEqual(3, task1.urgency);
    assert.strictEqual(5, task2.urgency);
    assert.strictEqual(2, task3.urgency);
    assert.strictEqual(0.5, task4.urgency);
  });

  it('should have a reward', function(){
    assert.strictEqual(3, task1.reward);
    assert.strictEqual(5, task2.reward);
    assert.strictEqual(2, task3.reward);
    assert.strictEqual(1, task4.reward);
  });

  it('should have an isDone setting', function(){
    assert.strictEqual(false, task1.isDone);
    assert.strictEqual(false, task2.isDone);
    assert.strictEqual(false, task3.isDone);
    assert.strictEqual(false, task4.isDone);
  });

  // it('has been changed to is done', function(){
  //   task.hasBeenDone(task1);
  //   assert.strictEqual(true, task1.isDone);

  // });




})
