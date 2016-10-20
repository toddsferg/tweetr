/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
 var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



function createTweetElement(tw){


  var $freshTweet = $("<article>").addClass("tweeted");
  var $header = $('<header>');
  var $avatar = $('<img>').addClass("avatar").attr("src", tweetData.user.avatars.regular);
  var $name = $('<p>').addClass("chosen-name").text(tweetData.user.name)
  var $handle = $('<p>').addClass("handle").text(tweetData.user.handle);
  var $midspace = $('<div>').addClass("midspace");
  var $tweettext = $('<p>').addClass("tweettext").text("tweetData.user.content")
  var $footer = $('<footer>').addClass("footer");
  var $dateSent = $('<p>').addClass("dateSent").text("10 days ago");
  var $iconHeart = $("<i>").attr({"class": "fa fa-heart", "aria-hidden": "true"});
  var $iconRetweet = $("<i>").attr({"class": "fa fa-retweet", "aria-hidden": "true"});
  var $iconFlag = $("<i>").attr({"class": "fa fa-font-awesome", "aria-hidden": "true"});

  $header = $header.append($avatar).append($name).append($handle);
  $midspace = $midspace.append($tweettext);
  $footer = $footer.append($dateSent).append($iconFlag).append($iconRetweet).append($iconHeart);

  $freshTweet = $freshTweet.append($header).append($midspace).append($footer);


  $('.feeder').append($freshTweet);

//   $header = $header.append('$avatar').append('$name').append('handle');
//   $footer = $footer.append('$dateSent').append($iconHeart).append($iconRetweet).append($iconFlag);
//   $freshTweet = $freshTweet.append($header).append('$tweettext').append('$footer');
//   return $freshTweet;
//   console.log($freshtweet)
 }


 })

























