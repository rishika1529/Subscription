function logout() {
    window.location.href = "login.html";
}

document.getElementById("loginForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    window.location.href = "dashboard.html";
});

document.getElementById("signupForm")?.addEventListener("submit", function(e){
    e.preventDefault();
    let p = document.getElementById("pass").value;
    let c = document.getElementById("confirm").value;

    if(p !== c){
        alert("Passwords don't match");
        return;
    }

    window.location.href = "dashboard.html";
});