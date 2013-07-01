$(document).ready(function(){

  var photos = $('#puppies li');
  $.each(photos, function(k, v) {
    var photo = $(v);
    var time = $('time', photo);
    photo.on('mouseover', function(){
      time.show();
    });
    photo.on('mouseout', function(){
      time.hide();
    });
    photo.on('click', function(){
      var img = photo.find('img');
      cool_box(img.clone());
    });
  });


var cool_box = function(img) {
  if ($(document).width() < 480){
    return false;
  }
  var cb_wrap = $('<div id="cb-wrap"/>');
  var cb_container = $('<div id="cb-container"/>');
  var close_btn = $('<button class="close"/>');
  close_btn.html('&times;');
  cb_container.append(img);
  cb_container.append(close_btn);
  cb_wrap.append(cb_container);
  $('body').append(cb_wrap);

  close_btn.on('click', function(){
    close();
  });
  cb_wrap.on('click', function(event){
    if (event.target.id == "cb-wrap"){
    close();}

  });

  $(document).on('keyup', function(event){
    if (event.keyCode == 27) {
      close();
    }

  });
var close = function(){
  cb_wrap.remove();
}
};




});
