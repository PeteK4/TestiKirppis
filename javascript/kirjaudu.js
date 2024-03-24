document.addEventListener("DOMContentLoaded", function() {
  nappiKirjauduKirppis.addEventListener("click", function(event) {
    event.preventDefault();
    const kaikkiKentat = [id, salasana];
    let kaikkiOk = 2;

    // Tarkista kentät 
    kaikkiKentat.forEach((syottoKentta) => {
      if (syottoKentta.value === "") {
        if (syottoKentta.placeholder === " * Täytä tämä kenttä" || syottoKentta.value === "") {
          syottoKentta.style.transition = "transform 0.1s";
          syottoKentta.style.transform = "scaleX(1.06)";
          setTimeout(() => {
            syottoKentta.style.transform = "scaleX(1)";
          }, 100);
        }
        naytaHuomautus(syottoKentta, " * Täytä tämä kenttä");
        kaikkiOk -= 1;
      }
    });

    // Tarkista tunnukset
    if (kaikkiOk === 2) {
      const tallennettuKayttaja = localStorage.getItem(id.value);

      if (!tallennettuKayttaja) {
        naytaHuomautus(id, "Antamaasi käyttäjätunnusta ei löydy.");
      } else {
        const tallennettuSalasana = JSON.parse(tallennettuKayttaja).salasana;
        if (tallennettuSalasana !== salasana.value) {
          naytaHuomautus(salasana, "Salasana ei täsmää käyttäjätunnuksen kanssa.");
        } else {
          // Ohjataan käyttäjä eteenpäin
          if (tallennettuSalasana === salasana.value) {
            
            // Tallenna käyttäjän rooli
            localStorage.setItem("kayttajanRooli", "lisääjä"); // Tässä oletusarvoisesti käyttäjä on lisääjä
            localStorage.setItem("kayttajaTunnus", id.value);
            localStorage.setItem("kirjautunut", "kirjautunut");
            lomakeYlos();
            setTimeout(() => {
                window.location.href = "./etusivu.html";
            }, 300);
        }}
      }}
  });

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
});

function lomakeYlos() {
  const lomake = document.querySelector(".lomake");
  const loppupiste = -lomake.offsetHeight;
  const alkupiste = window.innerHeight / 1.5;
  lomake.style.top = `${alkupiste}px`;
  lomake.style.transition = "top 0.4s";
  setTimeout(() => {
    lomake.style.top = `${loppupiste}px`;
  }, 100);
};

document.addEventListener("DOMContentLoaded", function() {
  // Tarkista käyttäjän rooli sisäänkirjautumisen yhteydessä ja tallenna se
  const kayttajanRooli = localStorage.getItem("kayttajanRooli");
});