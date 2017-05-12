var assert = require('assert');
var Task = require('../task.js');

describe('Task', function() {

  var task;

  beforeEach (function (){
    task = new Task({ todo: 'Stop Train', difficulty: 1, urgency: 2, reward: 3, isDone: false});
  });

  it(' task should have a name', function (){
    assert.strictEqual('Stop Train', task.todo);
  });

  it('should have a difficulty', function(){
    assert.strictEqual(1, task.difficulty);
  });

  it('should have an urgency', function(){
    assert.strictEqual(2, task.urgency);
  });

  it('should have a reward', function(){
    assert.strictEqual(3, task.reward);
  });

  it('should have an isDone setting', function(){
    assert.strictEqual(false, task.isDone);
  });

})
