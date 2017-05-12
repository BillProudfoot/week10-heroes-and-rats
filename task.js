function Task(difficulty, urgency, reward, isDone){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isDone = isDone;
}


module.exports = Task;

// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed