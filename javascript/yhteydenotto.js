document.addEventListener("DOMContentLoaded", function() {
    // Etsi tuoteTiedot-div
    const tuoteTiedotDiv = document.getElementById("tuoteTiedot");

    // Lue URL-parametrit
    const params = new URLSearchParams(window.location.search);
    const productName = params.get("name");
    const productDescription = params.get("description");
    const productPrice = params.get("price");
    // jne. jatkaisit muiden parametrien lukemista

    // Luo elementit ja aseta niihin tuotetiedot
    const productNameElement = document.createElement("h3");
    productNameElement.textContent = "Tuotenimi: " + productName;

    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = "Kuvaus: " + productDescription;

    const productPriceElement = document.createElement("p");
    productPriceElement.textContent = "Hinta: " + productPrice;

    // Lisää elementit tuoteTiedot-diviin
    tuoteTiedotDiv.appendChild(productNameElement);
    tuoteTiedotDiv.appendChild(productDescriptionElement);
    tuoteTiedotDiv.appendChild(productPriceElement);
    // jne. jatkaisit muiden elementtien lisäämistä
});

    // Etsi lomake
    const lomake = document.getElementById("yhteydenotto");

    // Lisää tapahtumankäsittelijä lomakkeen lähetykselle
    lomake.addEventListener("submit", function(event) {
        event.preventDefault(); // Estä lomakkeen oletustoiminto

        // Lue lomakkeen tiedot
        const omaNimi = document.getElementById("omanimi").value;
        const omaSahkoposti = document.getElementById("omasposti").value;
        const viesti = document.getElementById("tekstiKentta").value;

        // Tarkista, että lomake on täytetty
        if (omaNimi && omaSahkoposti && viesti) {
            // Täällä voit tehdä jotain lomakkeen tiedoilla, esim. lähettää ne takaisin palvelimelle jatkokäsittelyä varten

            // Tyhjennä lomake
            lomake.reset();

            // Näytä viesti lähetyksen onnistumisesta
            confirm("Viesti lähetetty ilmoittajalle.")

        } else {
            // Ilmoita käyttäjälle, että kaikki tiedot on täytettävä
            alert("Täytä kaikki lomakkeen kentät.");
        }
    });


