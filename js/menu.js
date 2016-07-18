window.onload = function() {
	if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
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

	else {
		var menu = document.getElementById("menu");
		menu.style.position = "fixed";
		menu.removeAttribute("top");
		menu.style.bottom = 0;
	}
}
