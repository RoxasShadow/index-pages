$(document).ready(function() {
  var show = function() { $('.overlay').show(); };
  var hide = function() { $('.overlay').hide(); };
  $('#chart').gitpie('things/repos.json', 'things/colors.json', show, hide);

  $('.main').onepage_scroll({ sectionContainer: 'section', responsiveFallback: 600 });
});