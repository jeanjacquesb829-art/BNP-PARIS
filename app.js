/ Données de connexion DEMO
‎const demoEmail = "jeanjacqueB2026@gmail.com";
‎const demoPass = "bonjour2026@";
‎const demoPin = "98982026";
‎
‎// 🔐 Connexion email/mot de passe
‎function login() {
‎    let email = document.getElementById("email").value;
‎    let pass = document.getElementById("password").value;
‎
‎    if (email === demoEmail && pass === demoPass) {
‎        alert("Votre compte est bloqué pour raison fiscale. Contactez : 07 65 42 87 30");
‎    } else {
‎        alert("Identifiants incorrects");
‎    }
‎}
‎
‎// 🔢 Connexion par PIN
‎function loginPin() {
‎    let pin = document.getElementById("pin").value;
‎
‎    if (pin === demoPin) {
‎        alert("Compte bloqué pour raison fiscale. Contactez : 07 65 42 87 30");
‎    } else {
‎        alert("PIN incorrect");
‎    }
‎}
‎
‎// Navigation
‎function goSignup() { window.location = "signup.html"; }
‎function goLogin() { window.location = "index.html"; }
‎function goPin() { window.location = "pin.html"; }
‎function goLogout() { window.location = "index.html"; }
‎
‎// 🔒 Blocage partout
‎function blocked() {
‎    alert("Votre compte est bloqué pour raison de retard fiscal.\nService client : 07 65 42 87 30");
‎}
‎
‎// Génération de 100 fausses transactions
‎const history = document.getElementById("history");
‎
‎if (history) {
‎    for (let i = 1; i <= 100; i++) {
‎        let amount = Math.random() < 0.5 ? "-" + Math.floor(Math.random() * 9000) + "€"
‎                                         : "+" + Math.floor(Math.random() * 9000) + "€";
‎
‎        let div = document.createElement("div");
‎        div.innerHTML = `
‎            <p><b>Transaction ${i}</b> — 2026</p>
‎            <p style="color:${amount.includes('-') ? 'red' : 'green'}">${amount}</p>
‎            <hr>
‎        `;
‎        history.appendChild(div);
‎    }
‎}

