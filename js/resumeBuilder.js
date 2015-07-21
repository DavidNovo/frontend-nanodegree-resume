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
var education = {};
education["schoolName"] = "Udacity";
education["yearsAttended"] = "2014 - present";
education["schoolCity"] = "Mountain View";

var education2 = {
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
            "title": "Javascript Crash Course"
        }
    ]
};

var work ={
    "start" : "",
    "employer" : "",
    "title": "",
    "dates" : "",
    "location" : "",
    "description" : ""
};

var project = {
    "start" : "",
    "title" : "",
    "dates" : "",
    "description" : "",
    "image" : ""
};




var HTMLheaderName    = HTMLheaderName.replace('%data%' , bio.name);
var HTMLheaderRole      = HTMLheaderRole.replace('%data%' , bio.role);

var HTMLworkEmployer    =  HTMLworkEmployer.replace('%data%' ,workRecent.company);
var HTMLworkTitle   = HTMLworkTitle.replace('%data%', workRecent.position);
var HTMLworkLocation    = HTMLworkLocation.replace('%data%', workRecent.city);

var HTMLschoolName = HTMLschoolName.replace('%data%', education["schoolName"]);
var HTMLschoolLocation = HTMLschoolLocation.replace('%data%', education["schoolCity"]);


$("#header").append(HTMLheaderName);
$("#header").append(HTMLheaderRole);

$("#header").append(HTMLworkEmployer);
$("#header").append(HTMLworkTitle);
$("#header").append(HTMLworkLocation);

$("#header").append(HTMLschoolName);
$("#header").append(HTMLschoolLocation);