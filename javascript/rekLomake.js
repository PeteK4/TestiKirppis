document.addEventListener("DOMContentLoaded", function() {
  const lomake = document.querySelector(".lomake");
  const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
  const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");
  const etusivuKuva = document.getElementById("etusivuKuva")
  const etuLasi = document.getElementById("etuLasi")
  const nappiKirjaudu = document.getElementById("nappiKirjaudu")
  const nappiLuoTunnus = document.getElementById("nappiLuoTunnus")
  const otsikko = document.getElementById("otsikko")
  const lomakeOtsikko = document.getElementById("lomakeOtsikko")

  const kentta3 = document.getElementById("kentta3")
  const kentta4 = document.getElementById("kentta4")
  const kentta5 = document.getElementById("kentta5")
  const kentta6 = document.getElementById("kentta6")

  const vihjeTekstit = [
    "Väh. 5 merkkiä", 
    "Väh. 5 merkkiä: Salasana7#",
    "Etunimi Sukunimi", 
    "nimi@email.fi"
  ];
  
  document.getElementById("nappiLuoTunnus").addEventListener("click", function() {
    for (let i = 1; i <= 4; i++) {
      const kentat = document.getElementById(`kentta${i}`).querySelector("input");
      kentat.setAttribute("placeholder", vihjeTekstit[i - 1]);
    }
    
    ylaPalkkiTeksti2.innerText = "Tervetuloa asiakkaaksi!"
    lomakeOtsikko.innerText = "Luo uusi käyttäjätunnus"
    kentta3.style.display ="flex";
    kentta4.style.display ="flex";
    kentta5.style.display ="flex";
    kentta6.style.display ="none";

    // Yläpalkin feidaukset
    ylaPalkkiTeksti1.style.opacity = "1";
    ylaPalkkiTeksti1.style.transition = "opacity .8s";
    etusivuKuva.style.opacity = "1";
    etusivuKuva.style.transition = "opacity .4s";
    etuLasi.style.opacity = "1";
    etuLasi.style.transition = "opacity .4s";
    otsikko.style.opacity = "1";
    otsikko.style.transition = "opacity .4s";

    setTimeout(() => {
      ylaPalkkiTeksti1.style.opacity = "0";
      etusivuKuva.style.opacity = "0";
      etuLasi.style.opacity = "0";
      otsikko.style.opacity = "0";
    }, 100);

    ylaPalkkiTeksti2.style.opacity = "0";
    ylaPalkkiTeksti2.style.display = "block";

    setTimeout(() => {
      ylaPalkkiTeksti2.style.transition = "opacity .8s";
      ylaPalkkiTeksti2.style.opacity = "1";
      ylaPalkkiTeksti1.style.display = "none";
      nappiKirjaudu.style.display = "none";
      nappiLuoTunnus.style.display = "none";
      etuLasi.style.display = "none";
    }, 200);

    // Näytön koon tarkistus, jonka mukaan määritetään elementin loppusijainti näytöllä
    let loppupiste;
    if (window.innerWidth > 1920) {
      loppupiste = 480;
    } else if (window.innerWidth > 1000) {
      loppupiste = 340;
    } else {
      loppupiste = 130;
    }

    lomake.style.display = "block";
    ylhaaltaAlas(lomake, loppupiste);
  });

  // Tapahtumankäsittelijä nappiKirjaudu-painikkeelle
  document.getElementById("nappiKirjaudu").addEventListener("click", function() {
 
    ylaPalkkiTeksti2.innerText = "Tervetuloa MoniToriin!"
    lomakeOtsikko.innerText = "Kirjaudu kirppikselle"
    kentta3.style.display ="none";
    kentta4.style.display ="none";
    kentta5.style.display ="none";
    kentta6.style.display ="flex";

    // Yläpalkin feidaukset
    ylaPalkkiTeksti1.style.opacity = "1";
    ylaPalkkiTeksti1.style.transition = "opacity .8s";
    etusivuKuva.style.opacity = "1";
    etusivuKuva.style.transition = "opacity .4s";
    etuLasi.style.opacity = "1";
    etuLasi.style.transition = "opacity .4s";
    otsikko.style.opacity = "1";
    otsikko.style.transition = "opacity .4s";
    setTimeout(() => {
      ylaPalkkiTeksti1.style.opacity = "0";
    }, 100);

    otsikko.style.opacity = "0";
    etusivuKuva.style.opacity = "0";
    etuLasi.style.opacity = "0";
    ylaPalkkiTeksti2.style.opacity = "0";
    ylaPalkkiTeksti2.style.display = "block";

    setTimeout(() => {
      ylaPalkkiTeksti2.style.transition = "opacity .8s";
      ylaPalkkiTeksti2.style.opacity = "1";
      ylaPalkkiTeksti1.style.display = "none";
      nappiKirjaudu.style.display = "none";
      nappiLuoTunnus.style.display = "none";
      etuLasi.style.display = "none";
    }, 100);

    // Näytön koon tarkistus, jonka mukaan määritetään elementin loppusijainti näytöllä
    let loppupiste;
    if (window.innerWidth > 1920) {
      loppupiste = 470;
    } else if (window.innerWidth > 1000) {
      loppupiste = 340;
    } else {
      loppupiste = 140;
    }

    lomake.style.display = "block";
    ylhaaltaAlas(lomake, loppupiste);
  });

  // Kirjaudu/Luo tunnus -lomakkeen Peruuta -napin toiminnot
  document.getElementById("nappiPeruutaLuoTunnus").addEventListener("click", peruuta);
  document.getElementById("nappiPeruutaKirjautuminen").addEventListener("click", peruuta);

  function peruuta() {
    const kaikkiKentat = [document.getElementById("id"), document.getElementById("salasana"), document.getElementById("nimi"), document.getElementById("sahkoposti")];
    kaikkiKentat.forEach((syottoKentta) => {
      syottoKentta.placeholder = "";
      syottoKentta.value = "";
    });

    ylaPalkkiTeksti1.style.opacity = "0";
    ylaPalkkiTeksti1.style.display = "block";
    etusivuKuva.style.opacity = "0";
    otsikko.style.opacity = "0";

    setTimeout(() => {
      ylaPalkkiTeksti1.style.transition = "opacity .3s";
      etusivuKuva.style.transition = "opacity .3s";
      etuLasi.style.transition = "opacity .3s";
      otsikko.style.transition = "opacity .3s";
      ylaPalkkiTeksti1.style.opacity = "1";
      etusivuKuva.style.opacity = "1";
      etuLasi.style.opacity = "1";
      otsikko.style.opacity = "1";
      nappiKirjaudu.style.display = "inline-block";
      nappiLuoTunnus.style.display = "inline-block";
    }, 100);

    ylaPalkkiTeksti2.style.display = "none";
    etuLasi.style.display = "block";
    alhaaltaYlos(lomake);
  }

// Siirrä elementti ylhäältä alas
  function ylhaaltaAlas(lomake, loppupiste) {
    const alkupiste = -lomake.offsetHeight;
    lomake.style.top = `${alkupiste}px`;
    lomake.style.transition = "top 0.4s";

    setTimeout(() => {
      lomake.style.top = `${loppupiste}px`;
    }, 100);
  }

// Siirrä elementti alhaalta ylös
  function alhaaltaYlos(lomake) {
    const loppupiste = -lomake.offsetHeight;
    const alkupiste = window.innerHeight / 1.5;
    lomake.style.top = `${alkupiste}px`;
    lomake.style.transition = "top 0.4s";

    setTimeout(() => {
      lomake.style.top = `${loppupiste}px`;
    }, 100);
  }
});