document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            if (password !== confirmPassword) {
                document.getElementById('confirmPasswordError').innerText = 'Passwords does not match';
                return;
            } else {
                document.getElementById('confirmPasswordError').innerText = '';
            }
            alert('Success!');
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            console.log('Registration complete. Form data:', formObject);
            this.reset();
        }
    });
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    let isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Validate username
    if (username === '') {
        document.getElementById('usernameError').innerText = 'Username is required';
        isValid = false;
    } else {
        document.getElementById('usernameError').innerText = '';
    }

    // Validate email
    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email address';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Validate phone number
    if (phone === '') {
        document.getElementById('phoneError').innerText = 'Phone number is required';
        isValid = false;
    } else if (!isValidPhoneNumber(phone)) {
        document.getElementById('phoneError').innerText = 'Enter a valid phone number (12 digits)';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
    }

    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^\d{12}$/;
    return phoneRegex.test(phone);
}
