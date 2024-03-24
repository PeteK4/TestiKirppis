// Asetetaan käyttäjän etunimi kirppiksen etusivulle yläpalkkiin
document.addEventListener("DOMContentLoaded", function() {
    const kayttaja = JSON.parse(localStorage.getItem(localStorage.getItem("kayttajaTunnus")));
    document.getElementById("kayttajaNimi").innerText = kayttaja.nimi.split(" ")[0] + "!";
});
