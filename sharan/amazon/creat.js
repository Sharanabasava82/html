document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageElement = document.getElementById('message');

    // Clear previous messages
    messageElement.textContent = '';

    // Basic validation
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match.';
        return;
    }

    if (name && email && password) {
        messageElement.textContent = 'Account created successfully!';
        messageElement.style.color = 'green';
        // Here you can add code to send data to your server
    } else {
        messageElement.textContent = 'Please fill in all fields.';
    }
});
