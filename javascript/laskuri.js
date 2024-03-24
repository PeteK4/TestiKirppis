// Seuraa tekstikentän toimintojasetSelectionRange
const tekstiKentta = document.getElementById("tekstiKentta");
const merkkienMaara = document.getElementById("laskuri");
const merkitMax = 200;
let klikattu = false;

// Alustetaan tekstikenttä ensimmäisellä syöttökentän klikkauksella
// Tällä estetään kentän alustus, jos kenttää klikataan useamman kerran.
tekstiKentta.addEventListener("click", function() {
  if (!klikattu) {
    tekstiKentta.value = "";
    merkkienMaara.innerText = `0 / ${merkitMax}`;
    tekstiKentta.setSelectionRange(0, 0);
    klikattu = true;
  }
});

// Jos merkkien määrä saavuttaa asetetun maksimin, estetään tekstikenttään kirjoittaminen
tekstiKentta.addEventListener("input", function() {
  if (klikattu) {
    let merkitLkm = tekstiKentta.value.length;
    if (merkitLkm > merkitMax) {
      tekstiKentta.value = tekstiKentta.value.substring(0, merkitMax);
      merkitLkm = merkitMax;
    }
// Asetetaan merkkien määrä näytölle
    merkkienMaara.innerText = `${merkitLkm} / ${merkitMax}`;
  }
});