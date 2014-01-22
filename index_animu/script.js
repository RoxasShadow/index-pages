function trip() {
  var options = {
    backToTopWhenEnded : true
  };

  new Trip([
    { sel: $('[title="GitHub"   ]'), content: 'GitHub'   , position: 's' },
    { sel: $('[title="Blog"     ]'), content: "Blog"     , position: 's' },
    { sel: $('[title="Email"    ]'), content: "Email"    , position: 's' },

    { sel: $('[title="Tumblr"   ]'), content: 'Tumblr'   , position: 's' },
    { sel: $('[title="Facebook" ]'), content: "Facebook" , position: 's' },
    { sel: $('[title="Twitter"  ]'), content: 'Twitter'  , position: 's' },
    { sel: $('[title="Google+"  ]'), content: "Google+"  , position: 's' },
  ], options).start();
}

$(document).ready(function() {
  $('body').css('background-image', "url('bg/" + Math.floor((Math.random()*4)+1) + ".png')");

  new $.scrolldeck({
    slides  : '.slide',
    buttons : '.nav-button',
    easing  : 'easeInOutExpo'
  });

  trip();
});