function tarkistaID() {
    const userIDInput = document.getElementById("ID");
    const userIDError = document.getElementById("IDError");

    if (userIDInput.value.length < 5) {
        userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään 5 merkkiä.";
    } else {
        userIDError.textContent = "";
    }
}

function tarkistaSalasana() {
    const salasanaInput = document.getElementById("salasana");
    const salasanaError = document.getElementById("salasana-error");

    if (salasanaInput.value.length < 8 || !validatePassword(salasanaInput.value)) {
        salasanaError.textContent = "Salasanan pituuden tulee olla vähintään 8 merkkiä ja sisältää vähintään yksi iso kirjain, yksi pieni kirjain, numero ja erikoismerkki.";
    } else {
        salasanaError.textContent = "";
    }
}

function validatePassword(password) {
    // Tarkistetaan, että salasana täyttää vaatimukset
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&/])[A-Za-z\d@$!%*?&/]{8,}$/;
    return passwordPattern.test(password);
}

function tarkistaNimi() {
    const nimiInput = document.getElementById("nimi");
    const nimiError = document.getElementById("nimi-error");

    const nimiPattern = /^[A-Za-zÄÖÅäöå\s]+$/; // Sallii kirjaimet, välilyönnit ja ääkköset

    if (!nimiPattern.test(nimiInput.value)) {
        nimiError.textContent = "Nimi voi sisältää vain kirjaimia, välilyöntejä ja ääkkösiä.";
    } else {
        nimiError.textContent = "";
    }
}

function tarkistaEmail(emailInput, emailError) {
    console.log(emailInput);
    console.log(emailError);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailInput.value.length === 0) {
        emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
    } else {
        emailError.textContent = '';
    }
}



function validateForm(event) {
    event.preventDefault(); // Estä lomakkeen lähettäminen oletuksena
    
    // Tarkista kaikki kentät ja päivitä virheilmoitukset
    tarkistaID();
    tarkistaSalasana();
    tarkistaNimi();

    tarkistaEmail(document.getElementById("email"), document.getElementById("email-error"));


    const userIDError = document.getElementById("IDError");
    // Tarkista, onko jossain kentässä vielä virheitä
    if (
        document.getElementById("IDError").textContent !== "" || 
        document.getElementById("salasana-error").textContent !== "" || 
        document.getElementById("nimi-error").textContent !== "" ||
    
        document.getElementById("email-error").textContent !== ""
    ) {
        // Jos kentissä on virheitä, älä lähetä lomaketta
        return false;
    }

    // Kaikki kentät ovat kunnossa, voit lähettää lomakkeen
    alert("Lomake lähetetty onnistuneesti!");
    document.getElementById("lomake").reset(); // Tyhjennä lomake

    const ilmoitus = document.getElementById('ilmoitus');
    ilmoitus.style.display = 'block';

    return true;
}

document.getElementById('lomake').addEventListener('submit', function(event) {
    event.preventDefault();

    // Haetaan lomakkeen kenttien arvot
    const ID = document.getElementById('ID').value;
    const salasana = document.getElementById('salasana').value;
    const nimi = document.getElementById('nimi').value;
    const email = document.getElementById('email').value;

    // Tallennetaan tiedot LocalStorageen
    localStorage.setItem('ID', ID);
    localStorage.setItem('salasana', salasana);
    localStorage.setItem('nimi', nimi);
    localStorage.setItem('email', email);

    // Siirrytään kirjautumissivulle
    window.location.href = 'kirjautuminen.html';
  });
