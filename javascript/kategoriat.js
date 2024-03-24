document.addEventListener('DOMContentLoaded', function() {
    const categories = ['vaatteet', 'keittiö', 'kirjat', 'huonekalut', 'tietotekniikka', 'muut'];

    categories.forEach(function(category) {
        const button = document.getElementById('nappi' + category.charAt(0).toUpperCase() + category.slice(1));
        button.addEventListener('click', function() {
            naytaTuotteet(category);
        });
    });
});

function naytaTuotteet(kategoria) {
    const tuoteAlue = document.getElementById('kategoriaTuotteet');
    tuoteAlue.innerHTML = ''; // Tyhjennä tuotealue
    tuoteAlue.style.display = "none";

    const productList = JSON.parse(localStorage.getItem('productList')) || [];
    document.getElementById("kategoriaTuotteetOtsikko").innerText = kategoria.charAt(0).toUpperCase() + kategoria.slice(1);

    productList.forEach(tuote => {
        if (tuote.kategoria === kategoria) {
            tuoteAlue.style.display = "block";
            const tuoteElementti = document.createElement('div');
            tuoteElementti.classList.add('tuote-elementti'); // Lisää CSS-luokka

            tuoteElementti.innerHTML = `
                <h3>${tuote.name}</h3>
                <p>Kuvaus: ${tuote.description}</p>
                <p>Hinta: ${tuote.price}</p>
                <p>Tyyppi: ${tuote.tyyppi}</p>
            `;

            const contactLink = document.createElement('a');
            contactLink.textContent = 'Ota yhteyttä ilmoittajaan';
            contactLink.href = `yhteydenottoLomake.html?name=${encodeURIComponent(tuote.name)}&description=${encodeURIComponent(tuote.description)}&price=${encodeURIComponent(tuote.price)}&kategoria=${encodeURIComponent(tuote.kategoria)}&tyyppi=${encodeURIComponent(tuote.tyyppi)}`;
            tuoteElementti.appendChild(contactLink);
            tuoteAlue.appendChild(tuoteElementti);
        }
    });   
}



/*

// Funktio, joka näyttää tuotteet valitussa kategoriassa
function naytaTuotteet(kategoria) {
    const tuoteAlue = document.getElementById('kategoriaTuotteet');
    tuoteAlue.innerHTML = ''; // Tyhjennä tuotealue

    const productList = JSON.parse(localStorage.getItem('productList')) || [];
        
    document.getElementById("kategoriaTuotteetOtsikko").innerText = kategoria.charAt(0).toUpperCase() + kategoria.slice(1);

    productList.forEach(tuote => {
        if (tuote.kategoria === kategoria) {
            const tuoteElementti = document.createElement('div');
            tuoteElementti.classList.add('tuote-elementti'); // Lisää CSS-luokka
            
            tuoteElementti.innerHTML = `
                <h3>${tuote.name}</h3>
                <p>Kuvaus: ${tuote.description}</p>
                <p>Hinta: ${tuote.price}</p>
                <p>Tyyppi: ${tuote.tyyppi}</p>
            `;
            tuoteAlue.appendChild(tuoteElementti);
        }
    });
}

// Kuuntele kategorianappien klikkauksia ja näytä tuotteet
document.addEventListener('DOMContentLoaded', function() {
    // Lisää tapahtumankäsittelijä kategorianappien klikkauksille
    document.getElementById('nappiVaatteet').addEventListener('click', function() {
        naytaTuotteet('vaatteet');
    });

    document.getElementById('nappiKeittiö').addEventListener('click', function() {
        naytaTuotteet('keittiö');
    });

    document.getElementById('nappiKirjat').addEventListener('click', function() {
        naytaTuotteet('kirjat');
    });

    document.getElementById('nappiHuonekalut').addEventListener('click', function() {
        naytaTuotteet('huonekalut');
    });

    document.getElementById('nappiTietotekniikka').addEventListener('click', function() {
        naytaTuotteet('tietotekniikka');
    });

    document.getElementById('nappiMuut').addEventListener('click', function() {
        naytaTuotteet('muut');
    });
});

*/