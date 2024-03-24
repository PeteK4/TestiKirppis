function lataaNapit(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(id).innerHTML = this.responseText;
            seuraaNappeja();
        }
    };
    xhttp.open("GET", "linkkiNapit.html", true);
    xhttp.send();
}

function seuraaNappeja() {
    document.getElementById("nappiEtusivu").addEventListener("click", function() {
        window.location.href = "etusivu.html";
    });

    document.getElementById("nappiKategoriat").addEventListener("click", function() {
        window.location.href = "kategoriat.html";
    });

    document.getElementById("nappiIlmoita").addEventListener("click", function() {
        window.location.href = "ilmoitaTuote.html";
    });

    document.getElementById("nappiTuotehaku").addEventListener("click", function() {
        window.location.href = "tuotehaku.html";
    });

    document.getElementById("nappiKirjauduUlos").addEventListener("click", function() {
        if (confirm("Vahvista uloskirjautuminen.")) {
            localStorage.setItem("kirjautunut", "eiKirjautunut");
            window.location.href = "index.html";
        }
    });
}

lataaNapit("linkkiNapit");
