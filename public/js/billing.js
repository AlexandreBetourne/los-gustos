document.addEventListener("DOMContentLoaded", function(e) {
	//RESTORE PRODUCTS OF THE CART
	var item_cookies = JSON.parse(item)

	for (var i = 0; i < item_cookies.length; i++) {
		var cart_item = `<div class="item flex space-between align-ctr">
			<div class="flex align-ctr">
				<p class="is-size-4 mg-r1"><span class="counter">${item_cookies[i].quantity}</span>x</p>
				<div class="over_hide img">
					<img src="${item_cookies[i].img}" alt="">
				</div>
				<span class="mg-l1 bold is-size-4 is-size-5-mobile">${item_cookies[i].name}</span>
			</div>
			<div class="flex align-ctr">
				<p class="is-size-4"><span class="price" data-price="${item_cookies[i].price}">${item_cookies[i].price}</span>€</p>
				<div class="mg-l2 quantity">
					<input type="button" name="plus" value="+" class="button is-size-4 bold" onclick="plus(event);totalPrice();">
					<input type="button" name="less" value="-" class="button is-size-4 bold mg-t1" onclick="less(event);totalPrice();">
				</div>
			</div>
		</div>`
		document.getElementById('summary').insertAdjacentHTML("afterbegin", cart_item)
	}
	///////<------->////////

	//SET TOTAL PRICE
	totalPrice()
})

function totalPrice() {
	var price = document.getElementsByClassName('price')
	var totalPrice = 0;
	for (var i = 0; i < price.length; i++) {
		var final_price = parseFloat(price[i].innerHTML) * parseInt(price[i].parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[0].innerHTML)
		totalPrice += final_price
	}
	document.getElementById('innerTotalPrice').innerHTML = totalPrice.toFixed(2)
	setCookie("totalPrice", totalPrice.toFixed(2), 30);
	if (totalPrice == 0) {
		checkoutcartcookies([])
		window.location.replace("/");
	}
}

function plus(event) {
	var price = event.target.parentNode.previousElementSibling.firstElementChild;
	var counter = event.target.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild
	var newvalue = parseInt(counter.innerHTML) + 1
	counter.innerHTML = newvalue
	if (newvalue != 0) {
		event.target.parentNode.parentNode.previousElementSibling.childNodes[5].classList.remove('line-through')
	}
	checkoutcartcookies(document.querySelectorAll('#summary .item'))
}

function less(event) {
	var price = event.target.parentNode.previousElementSibling.firstElementChild;
	var counter = event.target.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild
	var newvalue = parseInt(counter.innerHTML)
	if (parseInt(counter.innerHTML) > 1) {
		newvalue -= 1
	} else {
		event.target.parentNode.parentNode.previousElementSibling.childNodes[5].classList.add('line-through')
		newvalue = 0
	}
	counter.innerHTML = newvalue
	checkoutcartcookies(document.querySelectorAll('#summary .item'))
}