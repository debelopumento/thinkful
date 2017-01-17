function renderLogos(logoLib, searchCri) {
	var row = '';
	logoLib.map(function(currentLogo) {
		row += '<span class="logoUnit"><img src="' + currentLogo.url + '"/></span>';
	});
	$('.js-logoContainer').html(row);
}

function init() {
	//logo library
	var logoLib = [
		{	url: "images/aci.png",
			programType: "scholarship",
			educationLevel: "highSchool"
		},
		{	url: "images/acm.png",
			programType: "loanProgram",
			educationLevel: "highSchool"
		},
		{	url: "images/AFE.png",
			programType: "loanProgram",
			educationLevel: "kindergarden"
		},
		{	url: "images/aiq.png",
			programType: "scholarship",
			educationLevel: "highSchool"
		},
		{	url: "images/google.png",
			programType: "loanProgram",
			educationLevel: "highSchool"
		},
		{	url: "images/skype.png",
			programType: "scholarship",
			educationLevel: "highSchool"
		},
		{	url: "images/slack.png",
			programType: "loanProgram",
			educationLevel: "kindergarden"
		},
		{	url: "images/spartan.png",
			programType: "loanProgram",
			educationLevel: "kindergarden"
		},
		{	url: "images/twitter.png",
			programType: "scholarship",
			educationLevel: "highSchool"
		}
	];
	//
	var searchCri = {
		programType: [],
		educationLevel: []
	};
	renderLogos(logoLib, searchCri);
}

$(function() {
	init();
});
