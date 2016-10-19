
$(document).ready(function(){
  console.log('hello')
  $('.new-tweet').on('input', 'textarea', function(){
    var maxLength = 140;
    var length = $(this).val().length;
    var currentLength = maxLength - length;

    $(this).parent().find('.counter').html(currentLength);

    if (currentLength < 0){
      $(this).parent().find('.counter').css({ "color": "red"});
    }

  });
});
// on text keyup counter must go = counter - 1
//if counter < 0, color style to red

