window.onload = function() {
	var sticked = false;

	if ((top < 0)){
		menu.style.position = "fixed";
		sticked = true;
	}


	window.onscroll = function() {
		var placeholder = document.getElementById("placeholder");
		var menu = document.getElementById("menu");
		var top = placeholder.getBoundingClientRect().top;

		if ((top < 0) && (sticked == false)){
			menu.style.position = "fixed";
			sticked = true;
		}

		if ((top >= 1) && (sticked == true)){
			menu.style.position = "relative";
			sticked = false;
		}
	}
}
