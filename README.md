## BioTrackr Ember Client

#Synopsis
Biotrackr lets users easily record all their health related issues all in one place. Users will be able to quickly record when they are  feeling sick and some details about it. If a user is feeling strange or finds anything that they are concerned about regarding to their health, they can record that as well. 

A user doctor can then be given access to the users records with the app and the doctor can have instant access to the user’s overall health. The usr’s doctor will then be able to filter records to see trends and get a better idea of the user’s health when they visit.

##Technologies
###Rails API
The API for this app was built using Rails and PosgressSQL. A user will have one record containing many entries. Each entry contains a symptom, details about the symptom and a date. The API will be fed into a front-end Ember client.

###Ember Front-end Client
The front-end client was built using Ember.js. The client consumes the Rails api and will display a user’s record and all it’s entries. The user will be able to perform the CRUD actions on their records. Everything will be saved back into the api database. 

The app was built using mobile-first in mind since most of the user’s will be accessing it via a mobile platform. However it is responsive and will render on a desktop accordingly.

##Unsolved 
Currently the API is not set up to distinguish between patient users and doctor users. Once that is implemented, patient users will have the ability to give doctor users access to their records. 

There is also no way to query for specific groups of records (for instance, filter for all record entries with the words “throat”). Once this is implemented, user doctors can use this to narrow their scope when trying to diagnose patients. 

##Installation
- Fork and clone into a repository. 
- run ```npm install``` as well as ```bower install```

##Resources
- Rails API repo https://github.com/V4Vince/BioTrackr-api
- Heroku serving up the backend mysterious-falls-32517.herokuapp.com
