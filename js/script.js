$(document).ready(function(){

  var tiles = $('.tile');

  var num_clicks = 0;

  var selected = []

  var handle_click = function (){
    var tile = $(this);
    if (tile.hasClass('active')){
      return false;
    }
    if (selected.length == 2){
      $('.tile.active').removeClass('active');
      selected = [];
    }
    num_clicks++;
    tile.addClass('active');
    selected.push(tile);
  }

  $.each(tiles, function(index, tile){
    var tile = $(tile);
    tile.on('click', handle_click);
  });














});
