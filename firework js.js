// napbar start 
'use strict';

var RbMenu = function(elmId) {
  var elm    = document.querySelector(elmId);
  console.log(elm);
  var target = document.querySelector(elm.getAttribute('rb-target'));

  elm.addEventListener('click', function(evt) {
    if (target.classList.contains('active') === true) {
      target.classList.remove('active');
    }
    else {
      target.classList.add('active');
    }
  });
}

RbMenu('#rb_menu_toggle');


// napbar finish
// TYPING MAGIC

// FINISH TYPING MAGIC

// typing magic 2




// firework1

// finsh firework1

// cake bLLON NAME STERT
 window.open = function() {};
            window.print = function() {};
            // Support hover state for mobile.
            if (false) {
                window.ontouchstart = function() {};
            }
// CAKE BALLON NAMD]=E FINISH
