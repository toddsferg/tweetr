/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
 (function loadPage(){
  loadTweets(true);
 })();

 $('.new-tweet').hide();

function renderTweets(array){
  for( var i in array){
    var currentTweet = array[i];
    var $newTweet = createTweetElement(currentTweet);
    $('.feeder').prepend($newTweet);
  }return true
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

  if( tweetLength < 1){
    $('#warning').text('Type a little!');
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
  loadTweets(false);
  }
});

  function loadTweets(allTweets){
    event.preventDefault();
   var allTheTweets = $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json'
    });
   allTheTweets.done(function(data){
     // console.log("this is data \n\n", data);
      var singleTweet = [data[data.length -1]];
      if (allTweets == true){
        renderTweets(data);
      }else if (allTweets == false){
        renderTweets(singleTweet);
      }
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




















