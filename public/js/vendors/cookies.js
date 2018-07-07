function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var item = getCookie("item");
var delivering = getCookie("delivering");
var totalPrice = getCookie("totalPrice")

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

function sidemenuecookies(cartitems) {
	var item_infos = [];
	for (var i = 0; i < cartitems.length; i++) {
		if (cartitems[i].classList.contains("filled")) {
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
		}
	}
	setCookie("item", JSON.stringify(item_infos), 30);
}

function checkoutcartcookies(cartitems) {
	var item_infos = [];
	for (var i = 0; i < cartitems.length; i++) {
		var ele = cartitems[i];
		var name = ele.childNodes[1].childNodes[5].innerHTML
		var price = ele.childNodes[3].childNodes[1].childNodes[0].innerHTML
		var img = ele.childNodes[1].childNodes[3].childNodes[1].src
		var quantity = ele.childNodes[1].childNodes[1].childNodes[0].innerHTML
		item_infos.push({
			name,
			price,
			img,
			quantity
		})
	}
	setCookie("item", JSON.stringify(item_infos), 30);
}

function adressCookies(event) {
	var inputs = document.querySelectorAll("input[type=text]");
	var inputs_value = {
		lastName: inputs[0].value,
		firstName: inputs[1].value,
		adress: inputs[2].value,
		city: inputs[3].value,
		postale: inputs[4].value,
		phone: inputs[5].value
	}
	setCookie("delivering", JSON.stringify(inputs_value), 30);
}