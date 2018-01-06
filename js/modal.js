	var link = document.querySelector(".feedback");
	
	var popup = document.querySelector(".modal-feedback");
	var overlay = document.querySelector(".overlay");		
	var close = popup.querySelector(".cross-btn");

	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=user-name]");
	var mail = popup.querySelector("[name=user-mail]");

	var storage = localStorage.getItem("login");

	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		overlay.classList.add("overlay-show");
		

		if (storage) {
			login.value = storage;
			mail.focus();
		} else {
			login.focus();
		}
	});

	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		overlay.classList.remove("overlay-show");
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function (evt) {
		if (!login.value || !mail.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		} else {
			localStorage.setItem("login", login.value);
			localStorage.setItem("mail", mail.value);
		}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				overlay.classList.remove("overlay-show");
				popup.classList.remove("modal-error");
			}
		}
	});
