var App = {};

$(function() {

  App.loadColors = function() {

     $.getJSON('http://www.colourlovers.com/api/colors?format=json&callback=', null, function (results) {       
        alert('Cross domain JS call achieved. Have your implementation going in here!');
     });

  }
 

});
