var secondNewBlinkyDancer = function(top, left, timeBetweenSteps) {
   
  makeDancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
};


secondNewBlinkyDancer.prototype = Object.create(makeDancer.prototype);

secondNewBlinkyDancer.prototype.constructor = secondNewBlinkyDancer;

secondNewBlinkyDancer.prototype.step = function() {
  var context = this;
  
  // console.log(this.left)
  // call the old version of step at the beginning of any call to this new version of step
  setTimeout(this.step.bind(context), this.timeBetweenSteps);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node = $('<img class="dancer" src = "src/images/putin1.gif"></img>');

  this.$node.toggle();
  // return output;
};
