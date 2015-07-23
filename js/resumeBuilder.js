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
    "skills" :  ["Java", "Web Development", "J2EE"]
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
    "jobs" :  [
        {
            "start" : "2015 June",
            "employer" : "Peer 1 Hosting",
            "title": "Software Engineer",
            "dates" : "2015, June to current",
            "location" : "San Antonio",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat in nobis nesciunt eveniet natus. Cumque commodi eos, optio officia recusandae nobis vitae, tempora aut, tenetur perferendis unde molestias iure dolore."
        },
                {
            "start" : "2014 Sept",
            "employer" : "Def-Logix",
            "title": "Software Engineer",
            "dates" : "2014, Sept to 2015 May",
            "location" : "San Antonio",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum maiores voluptas illo dolore. Voluptatem possimus dolores maiores praesentium velit quibusdam, eum fugiat esse sunt, inventore assumenda? At officiis, aspernatur eos."
        }
    ]
};

var projects = {
    "projects" : [
        {
            "start" : "2015, June",
            "title" : "Make a temperature sensor using Explora",
            "dates" : "on-going",
            "description" : "I want to make a weather station using an Explora board.  I am using one of them because I do not know hoiw to wire the electronics parts I will need.",
            "image" : ""
        }
    ]
};

// checking if there are skils
if (bio.skills.length  >  0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0] );
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1] );
    $("#skills").append(formattedSkill);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2] );
    $("#skills").append(formattedSkill);
}

// first define functions...
var displayWork = function() {
    for (var job in work.jobs) {
    // I have to append the  div containning the class  attribute to the HTML page
    // // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // now the work-entry class is on the page.

    var formattedWorkEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle );

    // get the dates
     var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedWorkDate);

    // get the descriptions
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkDescription);
    }
}

// ... then call functions
// apend my jobs
displayWork();




