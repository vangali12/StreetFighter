var Arena = {
	beach: 'beach.jpg',
	dojo: 'dojo.jpg',
	earth: 'earth.jpg',
	forest: 'forest.jpg',
	matrix: 'matrix.jpg',
	snow: 'snow.jpg'
}

var Player = {
	donny: 'donny.png',
	leo: 'leo.png',
	mikey: 'mikey.png',
	raphael: 'raphael.png'
}

function createButtons(arena) {
	htmlString = "";
	for (var k in arena) {
		htmlString += "<button id=\"" + k + "\">" + k + "</button>";
	}
	$("#arena h2").after(htmlString);
}

function createDropDown(players) {
	htmlString = "";
	for (var k in players) {
		htmlString += "<option value=\"" + k + "\">" + k + "</option>";
	}
	$("#player form select option").after(htmlString);
}


$(document).ready(function() {
	createButtons(Arena);


	$("button").hover(function() {
		var urlLink = Arena[$(this).attr('id')];
		$(".wrapper").css("background-image", "url(" + urlLink + ")");
	}, function() {
		if ($(".wrapper").data('checked') !== true) {
			$(".wrapper").css("background-image", "none");
		}
	})


	$("button").click(function() {
		var urlLink = Arena[$(this).attr('id')];
		$(".wrapper").css("background-image", "url(" + urlLink + ")");
	}, function() {
		$(".wrapper").data("checked", true);
	})
	

	$("button").click(function() {
		$("#arena").hide();
	})

	$("button").click(function() {
		$("#player").show();
	})

	createDropDown(Player);

	$(document).on({
		change: function() {
			var imgLink1 = Player[$("select#play1 option:checked").val()];
			console.log(imgLink1);
			$("#p1").css("background-image", "url(" + imgLink1 + ")");
		}
	}, "#play1");


	$(document).on({
		change: function() {
			var imgLink2 = Player[$("select#play2 option:checked").val()];
			console.log(imgLink2);
			$("#p2").css("background-image", "url(" + imgLink2 + ")");
		}
	}, "#play2");





})