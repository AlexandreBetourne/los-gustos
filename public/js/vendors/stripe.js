var stripe = Stripe('pk_test_KOzVMutX8xYH4II3laW0gcAd');

var elements = stripe.elements();

var style = {
	base: {
		color: '#32325d',
		lineHeight: '18px',
		fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
		fontSmoothing: 'antialiased',
		fontSize: '16px',
		'::placeholder': {
			color: '#aab7c4'
		}
	},
	invalid: {
		color: '#fa755a',
		iconColor: '#fa755a'
	}
};

var card = elements.create('card', {
	style: style
});

card.mount('#card-element');

card.addEventListener('change', function(event) {
	var displayError = document.getElementById('card-errors');
	if (event.error) {
		displayError.textContent = event.error.message;
	} else {
		displayError.textContent = '';
	}
});

var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
	event.preventDefault();
	stripe.createToken(card).then(function(result) {
		if (result.error) {
			var errorElement = document.getElementById('card-errors');
			errorElement.textContent = result.error.message;
		} else {
			document.querySelector("input[name='id_token']").value = result.token.id;
			form.submit();
		}
	});
});