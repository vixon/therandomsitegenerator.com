var App = {};

$(function() {

  App.loadColors = function() {

     $.getJSON('http://www.colourlovers.com/api/colors?format=json&callback=', null, function (results) {
        alert('Cross domain JS call achieved. Have your implementation going in here!');
     });

  }

  App.getValues = function() {
    values = {};
    $.each($('input.form-control'), function() {
      dataVar = $(this).data('var');
      value = $(this).val();
      if (value !== "") {
        values[dataVar.substring(1)] = value;
      }
    })
    return values;
  }

  App.apply = function() {
    values = App.getValues();
    less.modifyVars(values);
  }

  App.setPalette = function(values) {
    $.each($("#colors input"), function(i) {
      $(this).val(values[i]);
    });
    $('#apply').click();
  }

  $('#apply').on('click', App.apply);

  $('input.form-control').on('blur', App.apply);

  $('a.queen').on('click', function() {
    values = ["#170503", "#621718", "#A47D4D", "#B0A081", "#DAC3A8"];
    App.setPalette(values);
  });

  $('a.lala').on('click', function() {
    values = ["#FF6600", "#FF9900", "#FFCC00", "#FFFF00", "#00CC00"];
    App.setPalette(values);
  });

  $('a.curtains').on('click', function() {
    values = ["#316DAD", "#4673A2", "#4A698A", "#455A71", "#716C45"];
    App.setPalette(values);
  });
});
