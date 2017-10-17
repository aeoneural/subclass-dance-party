var newBlinkyDancer = function(top, left, timeBetweenSteps) {
   
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.jump(top, left);
  
};


newBlinkyDancer.prototype = Object.create(makeDancer.prototype);

newBlinkyDancer.prototype.constructor = newBlinkyDancer;

newBlinkyDancer.prototype.step = function() {
  var context = this;
  // call the old version of step at the beginning of any call to this new version of step
  setTimeout(this.step.bind(context), this.timeBetweenSteps);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  // return output;
};

// newBlinkyDancer.prototype.step = function(top, left) {
//   var context = this;
//   // call the old version of step at the beginning of any call to this new version of step
//   setTimeout(this.step.bind(context), this.timeBetweenSteps);
  
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle();
//   // return output;
// };