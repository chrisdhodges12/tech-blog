# tech-blog#

## Description
This blog allows users to GET posts from other users, to CREATE a new post, to EDIT their posts, and DELETE their posts.  Once signed up and logged in, users may comment on posts.

## Installation/Directions
If using to code for education/production, first install required dependencies by running "npm install" in the command line.  Fill in your MySQL username and password into the .env.EXAMPLE file and be sure to rename it ".env".  Then run MySQL by typing "mysql -u root - p" and enter your password.  Type "SOURCE db/schema.sql" and then "USE tech_blog_db".  Exit the MySQL shell by typing "quit".  Next populate the database by running the command "npm run seed".  Start the server with the command "npm start".  Open insomnia and operate the routes using http://localhost:3001/api/... 
* api/user
* api/post
* api/comment

The app is deployed at 

##  Screenshots


<img src="./images/screenshot1.jpg" width="600px"><br>

<img src="./images/screenshot2.jpg" width="600px"><br>


## Contributions
Created by Chris Hodges, starter code provided by UNC Bootcamp.

## Questions
For any questions, contact me at chrisdhodges12@gmail.com or find me on GitHub at https://github.com/chrisdhodges12
