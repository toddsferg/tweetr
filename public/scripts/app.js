/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){


function renderTweets(array){

  for( var i = 0; i < array.length; i++){
    var currentTweet = array[i];
    var $newTweet = createTweetElement(currentTweet);
    $('.feeder').prepend($newTweet);
  }
}

function createTweetElement(tweetData){
  var time = new Date;
  var $freshTweet = $("<article>").addClass("tweeted");
  var $header = $('<header>');
  var $avatar = $('<img>').addClass("avatar").attr("src", tweetData.user.avatars.regular);
  var $name = $('<p>').addClass("chosen-name").text(tweetData.user.name)
  var $handle = $('<p>').addClass("handle").text(tweetData.user.handle);
  var $midspace = $('<div>').addClass("midspace");
  var $tweettext = $('<p>').addClass("tweettext").text(tweetData.content.text)
  var $footer = $('<footer>').addClass("footer");
  var $dateSent = $('<p>').addClass("dateSent").text(time);
  var $iconHeart = $("<i>").attr({"class": "fa fa-heart", "aria-hidden": "true"});
  var $iconRetweet = $("<i>").attr({"class": "fa fa-retweet", "aria-hidden": "true"});
  var $iconFlag = $("<i>").attr({"class": "fa fa-font-awesome", "aria-hidden": "true"});

  $header = $header.append($avatar).append($name).append($handle);
  $midspace = $midspace.append($tweettext);
  $footer = $footer.append($dateSent).append($iconFlag).append($iconRetweet).append($iconHeart);

  $freshTweet = $freshTweet.append($header).append($midspace).append($footer);
  var $tweet = $('.feeder').prepend($freshTweet);
  return $tweet;
 }

//Hijax

$('form').on("submit", function(event){

  event.preventDefault();
  var tweetLength = $(this).find('textarea').val().length;

  console.log(tweetLength);
  if( tweetLength < 2){
    $('#warning').text('too short');
    setTimeout(function(){$('#warning').text(''); }, 2500);
  } else if(tweetLength > 140){
    $('#warning').text('tweet too long!');
    setTimeout(function(){$('#warning').text(''); }, 2500);
  } else {
  console.log("submit");
  $.ajax({
    method: 'post',
    url: '/tweets',
    dataType: 'json',
    data: $(this).serialize()


  });
  loadTweets();
}
});

  function loadTweets(){
    event.preventDefault();
   $.ajax({
      url: '/tweets',
      method: 'GET',
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(data){
      renderTweets(data);
    })
  }

})

























