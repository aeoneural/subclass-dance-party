$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
  );
    
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('#newBlinkyDancer').on('click', function(event) { 
    $('.dancer').addClass('newClassColor');
    
    
    // $('#micheal').prepend(<img src = 'mich.png' />);

    
    // $('body').append(dancer.$node);
  });
  
  $('#secondBlinkyDancer').on('click', function(event) { 
    $('.dancer').addClass('newClassColor');
    
    
    // $('#micheal').prepend(<img src = 'mich.png' />);
    // console.log(window.dancers);
    // $('body').append(dancer.$node);
  });
  
  $('.lineUpDancersButton').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      
      window.dancers[i].top = 0;
      window.dancers[i].left = 100;
      console.log(window.dancers[i])
      var movedDancer = [];
      movedDancer.push(dancers[i]);
      $('.dancer').remove();
      // window.dancers.splice(i, 1);
      // window.dancers.splice(i, 0, movedDancer);
      
      $('body').append(movedDancer[i].$node);
      
      window.dancers = movedDancer;
    
  
      // lineUp.call(this, window.dancers[i])
      // var bound = lineUp.bind(window.dancers[i].$node);
      // bound();
    }
  });
  
  
 
});

