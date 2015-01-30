
var bio = {
	"name":"Moe Moe",
	"role":"Web Developer",
	"contacts": {
		"mobile": "123-555-1212",
		"email": "moe@j.com",
		"github": "moe",
		"twitter": "@moe",
		"location": "Houston"
	},
	"welcomeMessage":"Welcome!",
	"skills": [
		"coder", "reader", "mender", "conversationalist"
	],
	"bioPic": "images/fry.jpg",

	display: function() {
		 var formattedData;

		// display name and job title
		formattedData=HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedData);
		formattedData=HTMLheaderRole.replace("%data%",bio.role);
		$("#topContacts").before(formattedData);

		// display contact info and location
		formattedData = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedData);
		formattedData = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedData);
		formattedData = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedData);
		formattedData = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedData);
		formattedData = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedData);

		// display image
		formattedData = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedData);

		// display welcome message
		formattedData = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedData);


		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			formattedData = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedData);
			formattedData = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedData);
			formattedData = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedData);
			formattedData = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedData);
		}


	},


	// display lets connect contents
	displayLetsConnect: function() {
		// display contact info and location
		formattedData = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedData);
		formattedData = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedData);
		formattedData = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedData);
		formattedData = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#footerContacts").append(formattedData);
		formattedData = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedData);
	}
};

var education = {
	"schools" : [
		{
			"name": "Stanford  University",
			"location" : "Stanford, CA, USA",
			"degree" : "M.B.A.",
			"major" : ["Business"],
			"date": "2011",
			"schoolUrl": "http://stanford.edu"
		},
		{
			"name": "MIT",
			"location" : "Boston, MA, USA",
			"degree" : "M.A.",
			"major" : ["MultiDisciplinary Studies"],
			"date": "2009",
			"schoolUrl": "http://mit.edu"
		},
		{
			"name": "Yale",
			"location" : "New Haven, CT, USA",
			"degree" : "M.Ed.",
			"major" : ["Secondary Education"],
			"date": "2007",
			"schoolUrl": "http://yale.edu"
		},
		{
			"name": "Harvard",
			"location" : "Cambridge, MA, USA",
			"degree" : "B.Sc.",
			"major" : ["Computer Science"],
			"date": "1990",
			"schoolUrl": "http://harvard.edu"
		}

	],

	"onlineCourses": [
		{
			"title": "Nanodegree-",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www.udacity.com/course/ud304"
		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www.udacity.com/course/ud775"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www.udacity.com/course/ud804"
		}
	],

	display: function() {

		for(edIndex in education.schools) {
			$("#education").append(HTMLschoolStart);
			formattedData  = HTMLschoolName.replace("%data%",education.schools[edIndex].name);
			formattedData  = formattedData.replace("#",education.schools[edIndex].schoolUrl);
			formattedData2 = HTMLschoolDegree.replace("%data%",education.schools[edIndex].degree);
			formattedData = formattedData.concat(formattedData2);
			$(".education-entry:last").append(formattedData);



			// $("#education").append(HTMLschoolStart);
			formattedData = HTMLschoolDates.replace("%data%",education.schools[edIndex].date);
			$(".education-entry:last").append(formattedData);

			//$("#education").append(HTMLschoolStart);
			formattedData = HTMLschoolLocation.replace("%data%",education.schools[edIndex].location);
			$(".education-entry:last").append(formattedData);

			//$("#education").append(HTMLschoolStart);
			formattedData = HTMLschoolMajor.replace("%data%",education.schools[edIndex].major);
			$(".education-entry:last").append(formattedData);
		}

        // Online courses
		if (edIndex in education.onlineCourses) {
			$("#education:last").append(HTMLonlineClasses);
			for(edIndex in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				formattedData = HTMLonlineTitle.replace("%data%",education.onlineCourses[edIndex].title);
				formattedData2= HTMLonlineSchool.replace("%data%",education.onlineCourses[edIndex].school);
				formattedData = formattedData.concat(formattedData2);
				$(".education-entry:last").append(formattedData);

				formattedData = HTMLonlineDates.replace("%data%",education.onlineCourses[edIndex].dates);
				$(".education-entry:last").append(formattedData);

				formattedData = HTMLonlineURL.replace("%data%",education.onlineCourses[edIndex].url);
				$(".education-entry:last").append(formattedData);
			}
		}

	}
};

var work = {
	"jobs" : [
		{
			"employer": "UGI",
			"title": "Operations Helpdesk",
			"location": "Reading, PA",
			"dates": "1990-1992",
			"description": "Computer operations",
			"url": "http://www.ugi.com"
		},
		{
			"employer": "CME Group",
			"title": "Project Leader",
			"location": "Chicago, IL",
			"dates": "1992-2000",
			"description": "coder",
			"url": "http://www.cme.com"
		},
		{
			"employer": "Secure Systems",
			"title": "programmer",
			"location": "Temple, TX",
			"dates": "2000-present",
			"description": "coder",
			"url": "#"
		}
	],

	display: function() {

		var formattedData, formattedData2;

		// Display Work Experience
		for(jobIndex in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[jobIndex].employer);
			formattedEmployer = formattedEmployer.replace("#",work.jobs[jobIndex].url);

			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[jobIndex].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[jobIndex].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[jobIndex].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[jobIndex].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title": "European Data Feed Aggregator",
			"dates": "1994-1996",
			"description": "Take multiple data feeds from European exchanges and integrate into existing system",
			"images": [
				"images/fry.jpg",
				"images/fry.jpg"
			]
		},

		{
			"title": "Toronto Stock Exchange Data Ticker",
			"dates": "1994-1996",
			"description": "Display Toronto data on a ticker tape wall display",
			"images": [
				"images/fry.jpg",
				"images/fry.jpg"
			]
		}

	],

	display: function() {

		for(projIndex in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[projIndex].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[projIndex].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[projIndex].description);
			$(".project-entry:last").append(formattedDescription);

			for(imgIndex in projects.projects[projIndex].images) {
				var formattedImg = HTMLprojectImage.replace("%data%",projects.projects[projIndex].images[imgIndex]);
				$(".project-entry:last").append(formattedImg);
			}
		}
	}
};



// display each section of resume on browser page
bio.display();
work.display();
projects.display();
education.display();
bio.displayLetsConnect();