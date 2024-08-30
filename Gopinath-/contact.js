document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! Your message has been sent.');
        // Here you can handle form submission to a server or another action
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
