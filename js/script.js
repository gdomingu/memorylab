$(document).ready(function(){

  var tiles = $('.tile');
  var num_clicks = 0;
  var selected = [];

  var is_current_selection_a_match = function(){
    var img1src = selected[0].find('img').attr('src');
    var img2src = selected[1].find('img').attr('src');
    return(img1src == img2src);
  }

  var handle_win = function(){
    alert('you win in ' +num_clicks+' turns!');
    window.location.href = window.location.href;
  }

  var is_game_over = function(){
    return ($('.tile.matched').size() == tiles.length)
  }

  var is_two_selected = function(){
    return (selected.length == 2);
  }

  var activate_tile = function(tile){
    tile.addClass('active');
    selected.push(tile);
  }

  var deactivate_tile = function(){
    $('.tile.active').removeClass('active');
    selected = [];
  }

  var handle_click = function (){
    var tile = $(this);
    if (tile.hasClass('active')){
      return false;
    }
    if (is_two_selected()){
     deactivate_tile();
    }
    num_clicks++;
    activate_tile(tile);
    //match?
    if (is_two_selected() && is_current_selection_a_match()){
      $.each(selected, function(index, matched_tile){
        matched_tile.addClass('matched');
      });
      if(is_game_over()){
        handle_win();
      }
    }

  }

  $.each(tiles, function(index, tile){
    var tile = $(tile);
    tile.on('click', handle_click);
  });














});
