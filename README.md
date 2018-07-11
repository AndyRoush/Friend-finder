<h1>Friend Finder - Node and Express Servers</h1>

<h3>Overview</h3>
In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

<h3>Instructions</h3>
<p>1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.</p>
<p>2. Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.</p>
<p>3. Your htmlRoutes.js file should include two routes:</p>



A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page. 



<p>1.Your apiRoutes.js file should contain two routes:</p>



A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

<h3>Minimum Requirements</h3>
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

<h3>Hosting to Heroku</h3>
Now that we have a backend to our applications, we use Heroku for hosting. Please note that while Heroku is free, it will request credit card information if you have more than 5 applications at a time or are adding a database.
