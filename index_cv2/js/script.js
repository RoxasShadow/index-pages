$(document).ready(function() {

  $('a[data-section]').click(function() {
    var section = $(this).attr('data-section');
    
    $('.hsection').hide();
    $('#' + section).show();
  });

  $('.panel').click(function() {
    var descriptionId = '#' + $(this).text();

    $(descriptionId).bPopup({
      easing    : 'easeOutBack',
      speed     : 450,
      transition: 'slideDown'
    });
  });

});