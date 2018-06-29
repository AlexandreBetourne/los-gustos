var item_cookies = JSON.parse(item)

for (var i = 0; i < item_cookies.length; i++) {
	var item_template =
		`<div class="drop-area__item filled">
		<div>
			<div class="img pos-rel over_hide">
				<img src="${item_cookies[i].img}" alt="">
			</div>
			<div class="desc">
				<h3 class="bold text__is-black">${item_cookies[i].name}</h3>
				<p><span>${item_cookies[i].price}</span>€</p>
			</div>
		</div>
		<div class="align-ctr space-between">
			<button type="button" name="button" onclick="less_amount(event)">-</button>
			<span>${item_cookies[i].quantity}</span>
			<button type="button" name="button" onclick="plus_amount(event)">+</button>
		</div>
	</div>`
	document.getElementById('items_container').insertAdjacentHTML("afterbegin", item_template)
}

function plus_amount(event) {
	var amount = event.target.parentNode.childNodes[3]
	amount.innerHTML = parseInt(amount.innerHTML) + 1
	quantityCookies(document.querySelectorAll('.filled'))
}

function less_amount(event) {
	var amount = event.target.parentNode.childNodes[3]
	if (parseInt(amount.innerHTML) > 1) {
		amount.innerHTML = parseInt(amount.innerHTML) - 1
	}
	quantityCookies(document.querySelectorAll('.filled'))
}

function scroll_drop_area(event) {
	if (window.scrollY != 0) {
		document.getElementById('drop-area').classList.add("scrolled");
		document.getElementById('drop-overlay').classList.add("scrolled");
	} else {
		document.getElementById('drop-area').classList.remove("scrolled");
		document.getElementById('drop-overlay').classList.remove("scrolled");
	}
}