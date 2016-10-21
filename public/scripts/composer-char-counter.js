
$(document).ready(function(){

  $('.new-tweet').on('input', 'textarea', function(){
    var maxLength = 140;
    var length = $(this).val().length;
    var currentLength = maxLength - length;

    $(this).parent().find('.counter').html(currentLength);

    if (currentLength < 0){
      $(this).parent().find('.counter').css({ "color": "red"});
    } else if (currentLength > 0){
      $(this).parent().find('.counter').css({ "color": "black"});
    }

  });
});
// on text keyup counter must go = counter - 1
//if counter < 0, color style to red

