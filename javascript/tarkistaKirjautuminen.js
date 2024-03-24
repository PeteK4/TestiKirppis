// Tarkistetaan onko käyttäjä kirjautuneena sovellukseen.
// Tämä estää käyttäjää palaamasta selaimen "Siirry taaksepäin.." -napilla takaisin suoraan sovellukseen
if (localStorage.getItem("kirjautunut") == "eiKirjautunut") {
    window.location.href = "index.html";
  }