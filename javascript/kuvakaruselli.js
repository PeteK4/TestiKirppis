if (navigator.userAgent.indexOf("Firefox") !== -1) {
  alert("Käyttämääsi selainta ei tueta. Pahoittelut");
  window.close(); 
}

// Kirjautumissivun vaihtuvat kuvat (kuvakaruselli)
const etusivuKuva = document.getElementById("etusivuKuva");
const kuvat = [];
let kuvaNro = 0;
let kuvakaruselli = true;
//localStorage.clear();

for (let i = 1; i <= 5; i++) {
  kuvat.push(`./kuvat/etusivu${i}.webp`);
}

// Seurataan kirjautumislomakkeen tilaa
function kuvaKaruselli() {
  if (!kuvakaruselli) {
    return;
  }

// Kuvat vaihdetaan pehmeästi feidaamalla kuvasta toiseen
  kuvaNro = (kuvaNro + 1) % kuvat.length;
  const kuvaPolku = kuvat[kuvaNro];
  const uusiKuva = new Image();

  uusiKuva.src = kuvaPolku;
  uusiKuva.style.position = "absolute";
  uusiKuva.style.top = etusivuKuva.offsetTop + "px";
  uusiKuva.style.left = etusivuKuva.offsetLeft + "px";
  uusiKuva.style.opacity = "0";
  uusiKuva.style.borderRadius = "40px";
  uusiKuva.style.maxWidth = "100%"

  if (window.innerWidth < 1000) {
    uusiKuva.style.borderRadius = "0px";
    uusiKuva.style.maxWidth = "96%";
  }

  etusivuKuva.parentNode.appendChild(uusiKuva);
  uusiKuva.offsetHeight; 
  uusiKuva.style.transition = "opacity 1s ease-in-out"; 
  uusiKuva.style.opacity = "1"; 
  
  setTimeout(() => {
    etusivuKuva.src = kuvaPolku;
    uusiKuva.parentNode.removeChild(uusiKuva);
  }, 1000);
}

setInterval(kuvaKaruselli, 5000); // Yhden kuvan näkymisaika millisekunteina, 5 sekuntia

// Estetään kuvakarusellin toiminta, jos kirjautumislomake on näytöllä
document.getElementById("nappiKirjaudu").addEventListener("click", animOff);
document.getElementById("nappiLuoTunnus").addEventListener("click", animOff);

// Palautetaan kuvakarusellin toiminta, jos kirjautumislomake poistuu näytöltä
document.getElementById("nappiPeruutaLuoTunnus").addEventListener("click", animOn);
document.getElementById("nappiPeruutaKirjautuminen").addEventListener("click", animOn);

function animOff() {
  kuvakaruselli = false;
}

function animOn() {
  kuvakaruselli = true;
}

// Admin toiminnot. Nämä eivät tule sisältymään palvelinympäristössä toimivaan sovellukseen.
document.addEventListener("mousedown", function(event) {
  if (event.clientX <= 10 && event.clientY >= window.innerHeight - 10) {
      window.open('./admin/admin.html', '_blank');
  }
});
