/*function getPercentage(data) {
   var max = 0;
   var min = 0;
   var pdata = {};

   $.each(data, function(key, val) {
    if(max < val)
      max = val;
    if(val < min)
      min = val;
   });

   $.each(data, function(key, val) {
    pdata[key] = (10 + ((val - min) / (max - min)) * 90);
   });

   return pdata;
}*/

$.fn.gitpie = function(repos, colors, beforeSend, complete) {
  canvas = this;
  $.ajax({
    url:      repos,
    type:     'GET',
    dataType: 'json',
    beforeSend: function() {
      if(beforeSend)
        beforeSend();
    },
    complete: function() {
      if(complete)
        complete();
    },
    success: function(data) {
      var languages = {};
      $.each(data, function(key, val) {
        if($.trim(val.language).length > 0)
          if(languages[val.language] == undefined)
            languages[val.language] = 1;
          else
            languages[val.language] += 1;
      });

      $.getJSON(colors, function(colors) {
        // var pdata   = getPercentage(languages);
        var dataset = [];
        $.each(languages, function(key, val) {
          keyval = {
            value: val,
            color: colors[key],
            label: key
          };
          dataset.push(keyval);
        });

        var ctx = canvas.get(0).getContext('2d');
        new Chart(ctx).Pie(dataset);
      });
    }
  });
}