// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let user = document.getElementById("loginUser").value;
        let password = document.getElementById("loginPassword").value;
        let message = document.getElementById("loginMessage");

        if (user === "" || password === "") {

            message.innerHTML =
                '<div class="notification is-danger">Please fill in all fields.</div>';

        } else {

            message.innerHTML =
                '<div class="notification is-success">Login successful!</div>';
        }

    });
}


// SIGN UP

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let confirmPassword =
            document.getElementById("confirmPassword").value;

        let message = document.getElementById("signupMessage");


        if (
            name === "" ||
            email === "" ||
            username === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            message.innerHTML =
                '<div class="notification is-danger">Please fill in all fields.</div>';

            return;
        }


        if (password !== confirmPassword) {

            message.innerHTML =
                '<div class="notification is-danger">Passwords do not match.</div>';

            return;
        }


        message.innerHTML =
            '<div class="notification is-success">Account created successfully!</div>';

    });
}