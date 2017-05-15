var Task = function(options){
  this.todo = options.todo;
  this.difficulty = options.difficulty;
  this.urgency = options.urgency;
  this.reward = options.reward;
  this.isDone = options.isDone || false;
}

Task.prototype = {
  hasBeenDone: function(task){
    task.isDone = true;
  // return task.isDone;
  }
}
module.exports = Task;

// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed