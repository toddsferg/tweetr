/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
 (function loadPage(){
  loadTweets();
 })();

function renderTweets(array){

  for( var i = 0; i < array.length; i++){
    var currentTweet = array.slice(-1)[i];
    var $newTweet = createTweetElement(currentTweet);
    $('.feeder').prepend($newTweet);
  }
}

//////////Built Tweet Element

function createTweetElement(tweetData){
  var time = Math.floor((Date.now() - tweetData.created_at)/8.64e+7);
  var $freshTweet = $("<article>").addClass("tweeted");
  var $header = $('<header>');
  var $avatar = $('<img>').addClass("avatar").attr("src", tweetData.user.avatars.regular);
  var $name = $('<p>').addClass("chosen-name").text(tweetData.user.name)
  var $handle = $('<p>').addClass("handle").text(tweetData.user.handle);
  var $midspace = $('<div>').addClass("midspace");
  var $tweettext = $('<p>').addClass("tweettext").text(tweetData.content.text)
  var $footer = $('<footer>').addClass("footer");
  var $dateSent = $('<p>').addClass("dateSent").text(time + " days ago");
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

//Hijax with Ajax

$('form').on("submit", function(event){

  event.preventDefault();
  var tweetLength = $(this).find('textarea').val().length;

  ////////length verification

  if( tweetLength < 2){
    $('#warning').text('too short');
    setTimeout(function(){$('#warning').text(''); }, 2500);
  } else if(tweetLength > 140){
    $('#warning').text('tweet too long!');
    setTimeout(function(){$('#warning').text(''); }, 2500);
  } else {
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
      dataType: 'json'
    }).done(function(data){
      console.log("this is data \n\n", data);
      renderTweets(data);
    })
  }

//////////////Focus On Text area

$('#nav-span').on("click", function toggle(){
  $('.new-tweet').slideToggle("slow", function(){
    $('textarea').focus();
  });
});

$('textarea').focus();

})




















