function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var item = getCookie("item");

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkCartCookie(cartitems) {
	var item_infos = [];
	for (var i = 0; i < cartitems.length; i++) {
		if (cartitems[i].el.classList.contains("filled")) {
			var ele = cartitems[i].el;
			var name = ele.childNodes[1].childNodes[3].childNodes[1].innerHTML
			var price = ele.childNodes[1].childNodes[3].childNodes[3].firstChild.innerHTML
			var img = ele.childNodes[1].childNodes[1].childNodes[1].src
			var quantity = ele.childNodes[3].childNodes[3].innerHTML

			item_infos.push({
				name,
				price,
				img,
				quantity
			})
			setCookie("item", JSON.stringify(item_infos), 30);
		}
	}
}

function quantityCookies(cartitems) {
	var item_infos = [];
	for (var i = 0; i < cartitems.length; i++) {
		var ele = cartitems[i];
		var name = ele.childNodes[1].childNodes[3].childNodes[1].innerHTML
		var price = ele.childNodes[1].childNodes[3].childNodes[3].firstChild.innerHTML
		var img = ele.childNodes[1].childNodes[1].childNodes[1].src
		var quantity = ele.childNodes[3].childNodes[3].innerHTML

		item_infos.push({
			name,
			price,
			img,
			quantity
		})
		setCookie("item", JSON.stringify(item_infos), 30);
	}
}