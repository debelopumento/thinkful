function refreshLib(programTypeCri, educationLevelCri, logoLib) {
	
}


function renderLogos(logoLib) {
	//render logos
	var row = '';
	logoLib.map(function(currentLogo) {
		if (currentLogo.fade===true) {
			row += '<span class="logoUnit fade"><img src="' + currentLogo.url + '"/></span>';
		}
			else {row += '<span class="logoUnit"><img src="' + currentLogo.url + '"/></span>';}
	});
	$('.js-logoContainer').html(row);
	//serach criteria changes
	$('.js-searchBut').click(function(event){
		var programTypeCri = $('#programType').find("option:selected").text();
		var educationLevelCri = $('#educationLevel').find("option:selected").text();
		console.log(1, programTypeCri, educationLevelCri);
		refreshLib(programTypeCri, educationLevelCri, logoLib);
	});
}

function init() {
	//logo library
	var logoLib = [
		{	url: "images/aci.png",
			programType: "scholarship",
			educationLevel: "highSchool",
			fade: true
		},
		{	url: "images/acm.png",
			programType: "loanProgram",
			educationLevel: "highSchool",
			fade: true

		},
		{	url: "images/AFE.png",
			programType: "loanProgram",
			educationLevel: "kindergarden",
			fade: true
		},
		{	url: "images/aiq.png",
			programType: "scholarship",
			educationLevel: "highSchool",
			fade: true
		},
		{	url: "images/google.png",
			programType: "loanProgram",
			educationLevel: "highSchool",
			fade: true
		},
		{	url: "images/skype.png",
			programType: "scholarship",
			educationLevel: "highSchool",
			fade: true
		},
		{	url: "images/slack.png",
			programType: "loanProgram",
			educationLevel: "kindergarden",
			fade: true
		},
		{	url: "images/spartan.png",
			programType: "loanProgram",
			educationLevel: "kindergarden",
			fade: true
		},
		{	url: "images/twitter.png",
			programType: "scholarship",
			educationLevel: "highSchool",
			fade: true
		}
	];
	//
	
	renderLogos(logoLib);
}

$(function() {
	init();
});
