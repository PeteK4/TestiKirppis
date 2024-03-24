document.addEventListener("DOMContentLoaded", function() {
  nappiLuoUusiTunnus.addEventListener("click", function(event) {
    event.preventDefault();
    const kaikkiKentat = [id, salasana];
    let kaikkiOk = 4;

    // Tarkista kentät 
    kaikkiKentat.forEach((syottoKentta) => {
      if (syottoKentta.value == "") {
        if (syottoKentta.placeholder == " * Täytä tämä kenttä" || syottoKentta.value == "") {
          venyta(syottoKentta);
        }
        naytaHuomautus(syottoKentta, " * Täytä tämä kenttä");
        kaikkiOk -= 1;
      } else if (syottoKentta == id && syottoKentta.value.length < 5) {
        naytaHuomautus(syottoKentta, "Syötä vähintään 5 merkkiä");
        venyta(syottoKentta);
        kaikkiOk -= 1;
      } 
    });

// Tallennus localStorageen
    if (kaikkiOk == 4) {
      const localAdmin = localStorage.getItem(id.value);
  
      // Tarkistetaan, onko käyttäjätunnus jo tallennettu
      if (localAdmin) {
        naytaHuomautus(id, "Tämä käyttäjätunnus on varattu.");
      } else {
        
        const admin = {
          id: id.value,
          salasana: salasana.value,
        };

        // Tallennetaan käyttäjätunnus localStorageen
        localStorage.setItem(id.value, JSON.stringify(admin));
        window.location.href = "../admin/etusivu.html";
      }
    }
  });

// Funktio, joka tarkistaa salasanan vaatimukset
    function tarkistaSalasana(salasana) {
    const salasanaRegex = /^(?=.*[A-Z]).{5,}$/;
    return salasanaRegex.test(salasana);
    }

// Funktio, joka tarkistaa sähköpostiosoitteen muodon
  function tarkistaSposti(sposti) {
    const spostiRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return spostiRegex.test(sposti);
  }

  // Näytä huomautus syöttökentässä, jos kenttä on tyhjä tai virheellisesti täytetty
  function naytaHuomautus(syottoKentta, teksti) {
    syottoKentta.value = "";
    syottoKentta.placeholder = teksti;
  }

  // Poista huomautus
  const aktiivinen = (syottoKentta) => {
    if (syottoKentta.placeholder != "") {
      syottoKentta.placeholder = "";
    }
  };

  // Aseta syöttökenttä aktiiviseksi
  [id, salasana].forEach((syottoKentta) => {
    syottoKentta.addEventListener("focus", () => aktiivinen(syottoKentta));
  });

  function venyta(syottoKentta) {
    syottoKentta.style.transition = "transform 0.1s";
    syottoKentta.style.transform = "scaleX(1.06)";
    setTimeout(() => {
      syottoKentta.style.transform = "scaleX(1)";
    }, 100);
  }
});