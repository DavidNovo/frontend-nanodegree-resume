/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = "David Novogrodsky";
var formattedRole = 'Software Engineer';

// this is the object:literal notation
var bio = {
    "name" : "David Novogrodsky",
    "role" : "Software Engineer",
    "contactInfo": "whatefver",
    "pictureURL" : "later",
    "welcomeMessage" : "Hi how are you",
    "slills" : "Java"
};

// this is dot notation
var workRecent = {};
workRecent.company = "Peer 1 Hosting";
workRecent.position = "software Engineer";
workRecent.city = "San Antonio";

// bracket notation
var educationBracket = {};
educationBracket["schoolName"] = "Udacity";
educationBracket["yearsAttended"] = "2014 - present";
educationBracket["schoolCity"] = "Mountain View";

var education = {
    "schools": [
        {
            "schoolName": "Udacity",
            "SchoolCity": "Mountain View",
            "Major": "no-major",
            "Minor": "no minor",
            "Graduation": "curently attending"
        },
        {
            "schoolName": "St. Norbert College",
            "SchoolCity": "DePere",
            "Major": "Mathematics and Physics",
            "Minor": "no minor",
            "Graduation": "May 1990"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Crash Course",
            "school" : "Udacity",
            "dates" : "current",
            "URL" : ""
        }
    ]
};

var work ={
    "start" : "2015 June",
    "employer" : "Peer 1 Hosting",
    "title": "Software Engineer",
    "dates" : "current",
    "location" : "San Antonio",
    "description" : "It is a lot of fun"
};

var project = {
    "start" : "2015, June",
    "title" : "Make a temperature sensor using Explora",
    "dates" : "on-going",
    "description" : "I want to make a weather station using an Explora board.  I am using one of them because I do not know hoiw to wire the electronics parts I will need.",
    "image" : ""
};




var HTMLheaderName    = HTMLheaderName.replace('%data%' , bio.name);
var HTMLheaderRole      = HTMLheaderRole.replace('%data%' , bio.role);

var HTMLworkEmployer    =  HTMLworkEmployer.replace('%data%' ,workRecent.company);
var HTMLworkTitle   = HTMLworkTitle.replace('%data%', workRecent.position);
var HTMLworkLocation    = HTMLworkLocation.replace('%data%', workRecent.city);

var HTMLschoolName = HTMLschoolName.replace('%data%', educationBracket["schoolName"]);
var HTMLschoolLocation = HTMLschoolLocation.replace('%data%', educationBracket["schoolCity"]);


$("#header").append(HTMLheaderName);
$("#header").append(HTMLheaderRole);

$("#header").append(HTMLworkEmployer);
$("#header").append(HTMLworkTitle);
$("#header").append(HTMLworkLocation);

$("#header").append(HTMLschoolName);
$("#header").append(HTMLschoolLocation);