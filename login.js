const form = document.getElementById('password-form');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const password = passwordInput.value;
	if (password === 'metswinws') {
		window.location.href = 'https://lolmets.bluehattergta.repl.co/pBAmwx1d24lqfB8q5nbuPy.html';
	} else {
		alert('Incorrect password. Please try again.');
	}
});