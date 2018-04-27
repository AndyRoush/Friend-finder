var path = require('path');

//Loads data from friends.js
var friends = require("../data/friends.js")

//Routing
module.exports = function(app) {
    //API GET request
    app.get("/api/friends", function(req, res) {
        res.json(friends)
    })
    // Information from Survey
    app.post("/api/friends", function (res,req) {
        var diffArr = []
        var match = 0
        var userScore = req.body.scores

        //loops through new friends to check difference in answers
        for(var i = 0; i < friends.length; i++) {
            var totalDifference = 0
            var allScores = friends[i].scores

            //loops through all the friends scores and their differences to make sure returns positive numbers
            for (var j = 0; j < allScores.length; j++) {
                var friendsScore = allScores[j]
                var surveyScore = userScore[j]
                var difference = friendsScore - surveyScore

                //if difference in a negative, switch variables to make positive
                    if (difference < 0) {
                        difference = surveryScore - friendsScore
                    }
                    //sum all differences of each score
                        totalDifference += difference
            }
            //array to hold differences of each friends vs user score
            diffArr[i] = totalDifference
        }
        //chosen difference to be used to compare and find best match
        var findMatch = diffArr[0]

            //loops through the differences and returns the best match
            for (var k = 0; k < diffArr.length; k++) {
                if (diffArr[k] < findMatch) {
                    match = k
                }
            }
            friends.push(req.body)
                res.json(friends[match])
    })
}