document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("nappiLuoTunnus").addEventListener("click", function() {
    const lomake = document.querySelector(".lomake");
    const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
    const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");
 
    const nappiKirjaudu = document.getElementById("nappiKirjaudu")
    const nappiLuoTunnus = document.getElementById("nappiLuoTunnus")
    const otsikko = document.getElementById("otsikko")
    
    const vihjeTekstit = [
      "Anna vähintään 5 merkkiä", 
      "Anna vähintään 5 merkkiä (1 iso kirjain, 1 numero, 1 erikoismerkki)"
    ];
    
    for (let i = 1; i <= 2; i++) {
      const kentat = document.getElementById(`kentta${i}`).querySelector("input");
      kentat.setAttribute("placeholder", vihjeTekstit[i - 1]);
    }
    
    ylaPalkkiTeksti2.innerText = "Admin rules :)"
    document.getElementById("lomakeOtsikko").innerText = "Luo uusi tunnus"
    document.getElementById("kentta5").style.display ="flex";
    document.getElementById("kentta6").style.display ="none";

    // Yläpalkin feidaukset
    ylaPalkkiTeksti1.style.opacity = "1";
    ylaPalkkiTeksti1.style.transition = "opacity .8s";
    otsikko.style.opacity = "1";
    otsikko.style.transition = "opacity .4s";
    setTimeout(() => {
      ylaPalkkiTeksti1.style.opacity = "0";
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
    }, 100);

    // Näytön leveyden tarkistus, jonka mukaan määritetään elementin loppusijainti näytöllä
    let loppupiste;
    if (window.innerWidth > 1920) {
      loppupiste = 340;
    } else if (window.innerWidth > 1000) {
      loppupiste = 320;
    } else {
      loppupiste = 120;
    }
    
    // Elementti alas
    lomake.style.display = "block";
    ylhaaltaAlas(lomake, loppupiste);
  });

  // Tapahtumankäsittelijä nappiKirjaudu-painikkeelle
  document.getElementById("nappiKirjaudu").addEventListener("click", function() {
    const lomake = document.querySelector(".lomake");
    const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
    const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");
    const otsikko = document.getElementById("otsikko")
    const nappiKirjaudu = document.getElementById("nappiKirjaudu")
    const nappiLuoTunnus = document.getElementById("nappiLuoTunnus")
    
    ylaPalkkiTeksti2.innerText = "Ylläpitäjä"
    document.getElementById("lomakeOtsikko").innerText = "Kirjaudu ylläpitäjänä"
    document.getElementById("kentta5").style.display ="none";
    document.getElementById("kentta6").style.display ="flex";

    // Yläpalkin feidaukset
    ylaPalkkiTeksti1.style.opacity = "1";
    ylaPalkkiTeksti1.style.transition = "opacity .8s";
    otsikko.style.opacity = "1";
    otsikko.style.transition = "opacity .4s";
    setTimeout(() => {
      ylaPalkkiTeksti1.style.opacity = "0";
    }, 100);

    otsikko.style.opacity = "0";
    ylaPalkkiTeksti2.style.opacity = "0";
    ylaPalkkiTeksti2.style.display = "block";
    setTimeout(() => {
      ylaPalkkiTeksti2.style.transition = "opacity .8s";
      ylaPalkkiTeksti2.style.opacity = "1";
      ylaPalkkiTeksti1.style.display = "none";
      nappiKirjaudu.style.display = "none";
      nappiLuoTunnus.style.display = "none";
    }, 100);

    // Näytön leveyden tarkistus, jonka mukaan määritetään elementin loppusijainti näytöllä
    let loppupiste;
    if (window.innerWidth > 1920) {
      loppupiste = 340;
    } else if (window.innerWidth > 1000) {
      loppupiste = 300;
    } else {
      loppupiste = 120;
    }

    // Elementti alas
    lomake.style.display = "block";
    ylhaaltaAlas(lomake, loppupiste);
  });

  // Elementti ylös
  document.getElementById("nappiPeruutaLuoTunnus").addEventListener("click", peruuta);
  document.getElementById("nappiPeruutaKirjautuminen").addEventListener("click", peruuta);

  function peruuta() {
    const kaikkiKentat = [document.getElementById("id"), document.getElementById("salasana")];
    kaikkiKentat.forEach((syottoKentta) => {
      syottoKentta.placeholder = "";
      syottoKentta.value = "";
    });

    const ylaPalkkiTeksti1 = document.getElementById("ylaPalkkiTeksti1");
    const ylaPalkkiTeksti2 = document.getElementById("ylaPalkkiTeksti2");
    const etusivuKuva = document.getElementById("etusivuKuva")
    const otsikko = document.getElementById("otsikko")
    const nappiKirjaudu = document.getElementById("nappiKirjaudu")
    const nappiLuoTunnus = document.getElementById("nappiLuoTunnus")

    ylaPalkkiTeksti1.style.opacity = "0";
    ylaPalkkiTeksti1.style.display = "block";
    otsikko.style.opacity = "0";

    setTimeout(() => {
      ylaPalkkiTeksti1.style.transition = "opacity .3s";
      otsikko.style.transition = "opacity .3s";
      ylaPalkkiTeksti1.style.opacity = "1";
      otsikko.style.opacity = "1";
      nappiKirjaudu.style.display = "inline-block";
      nappiLuoTunnus.style.display = "inline-block";
    }, 100);
    ylaPalkkiTeksti2.style.display = "none";

    const lomake = document.querySelector(".lomake");
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