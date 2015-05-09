var cameron = {}
cameron.job = "course dev";

var makeCourse = function() {
	console.log("Made a course");
}

var courses = 0;
while(cameron.job === "course dev")
{
	makeCourse();
	courses = courses + 1;
	if (courses === 10)
		cameron.job = "learning specialist"; 
}

console.log (cameron.job);

function displayWork()
{
for (job in works.job) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}

function logClicks(x, y) {
	console.log(x + "," + y);
}

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

function inName(name) {
	var names = name.trim().split(" ");
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase(); 
	names[1] = names[1].toUpperCase();
	return names[0] + " " + names[1];
}

console.log(inName("sebastian thrun"));

$('#main').append(internationalizeButton);

projects.display = function() {
	console.log("Inside projects.display function");
	for (proj in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var title = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		$(".project-entry:last").append(title);
		
		var dates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(dates);
		
		var desc = HTMLprojectDates.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(desc);
		
		if(projects.projects[proj].images.length > 0)
		{
			for(image in projects.projects[proj].images)
			{
				var formattedImage = HTMLprojectDates.replace("%data%", projects.projects[proj].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

$('#main').append(projects.display());

$("#mapDiv").append(googleMap);
