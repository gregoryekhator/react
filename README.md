#react #node #mongodb

INSTRUCTIONS FOR DEV AND PRODUCTION DEPLOY OF REACT NODE SHOPPING CART ON RENDER FOR EXAMPLE

DEV ENVIRONMENT

The process here is in the root folder go to terminal and type 

npm init

This will be for Node for the whole project and will have its own package.son

Then in the backend run in terminal

npm start

Then in frontend run in terminal

npm run build

Commit your code to your github account repository

Get your mongodb account ready for its connection string ie MONGODB_URI, Note for you need to have your database name, because immediately after the last "/" you will need to put your database name. Follow MongoDB manual if necessary to get it and where to place it. Or your tutor.

In render.com in the settings and env variables, enter the appropriate information. 


BUILD AND DEPLOY

If you are using npm then change yarn commands to npm
The default for npm build and deploy is. Note with yarn it automatically installs with just yarn.

npm install // build command

npm start // start command

In Environment Variables
Enter your:

JWT_SECRET
MONGODB_URI


PRODUCTION ENVIRONMENT

Publish To Render.com account
    a. create and config node project
    b. serve build folder in frontend folder
    c. Create Render account
	d. connect it to github
    e. Create mongodb atlas database
    f. Set database connection in Render env variables
    g. Commit and push
	
The process here is in the root folder go to terminal and type 

npm init

This will be for Node for the whole project and will have its own package.son

Then in the backend run in terminal

npm start

Then in frontend run in terminal

npm run build

Commit your code to your github account repository

Get your mongodb account ready for its connection string ie MONGODB_URI, Note for you need to have your database name, because immediately after the last "/" you will need to put your database name. Follow MongoDB manual if necessary to get it and where to place it. Or your tutor.

In render.com in the settings and env variables, enter the appropriate information. 


BUILD AND DEPLOY

If you are using npm then change yarn commands to npm
The default for npm build and deploy is. Note with yarn it automatically installs with just yarn.

npm install

npm start

In Environment Variables
Enter your:

JWT_SECRET
MONGODB_URI

Then deploy, it will deploy automatically anytime you push code to github.
