"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

let collection;

  const Tweets = {
    saveTweet: (tweet) => {
      console.log("this is the tweet  \n\n\n", tweet );
      collection.insert(tweet);
      return true;
    },

    getTweets: (cb) => {
      collection.find().toArray((err, results) => {
        // console.log(results);
        cb(results.sort(function(a, b) {
          return a.created_at - b.created_at
        }))
      });
    }
}


module.exports = {
  connect: (callback) => {

    MongoClient.connect(MONGODB_URI, (err, db) => {

      collection = db.collection("tweets")
      callback(Tweets);
    });
  }
}
