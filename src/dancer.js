// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps; 
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
    
  this.step();
  
  this.setPosition(top, left);
  
 
};

makeDancer.prototype.step = function() { 
  setTimeOut(this.step.bind(this), this.timeBetweenSteps); 
};

makeDancer.prototype.setPosition = function(top, left) { 
  var styleSettings = { 
    top: top, 
    left: left
  };
  this.$node.css(styleSettings);
}; 

makeDancer.prototype.lineUp = function() {
  var increment = 10;
  this.top = 100; 
  this.left = increment;
  increment++;
  // this.$node.css(styleSettings);
};

