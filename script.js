function login() {
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const correctPassword = "123456";

    if (password === correctPassword) {
        message.style.color = "#00ff66";
        message.textContent = "Login successful!";

        setTimeout(function () {
            window.location.href = "home.html";
        }, 1000);

    } else {
        message.style.color = "#ff4444";
        message.textContent = "Wrong password!";
    }
}
