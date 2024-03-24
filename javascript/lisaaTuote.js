// Kun sivu latautuu, tarkista, onko tallennettuja tuotteita localStoragesta ja näytä ne
document.addEventListener('DOMContentLoaded', function () {
    let productList = JSON.parse(localStorage.getItem('productList')) || [];
    let currentUser = localStorage.getItem('kayttajaTunnus');
    const valiOtsikko2 = document.getElementById("valiOtsikko2");
    const viesti = document.getElementById("viesti");

    if (productList.length === 0) {
        viesti.style.display = "block";
        valiOtsikko2.style.display = "none";
    } else {
        productList.forEach(product => {
            if (product.addedBy === currentUser) {
                addProductToPreview(product);
            }
        });
    }
});

// Lisää tapahtumankäsittelijä lomakkeen lähettämiselle
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.querySelector('.product-name').value;
    const productDescription = document.querySelector('.product-description').value;
    const productPrice = document.querySelector('.product-price').value;
    const kategoriaTieto = document.querySelector('.kategoria');
    const tyyppi = document.querySelector('.tyyppi');
    valiOtsikko2.style.display = "block";

    const product = {
        name: productName,
        description: productDescription,
        price: productPrice,
        kategoria: kategoriaTieto.value,
        tyyppi: tyyppi.value,
        addedBy: localStorage.getItem("kayttajaTunnus")
    };

    // Hae tai alusta tuotelista localStoragesta
    let productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Lisää uusi tuote tuotelistaan
    productList.push(product);

    // Tallenna päivitetty tuotelista localStorageen
    localStorage.setItem('productList', JSON.stringify(productList));

    // Lisää tuote esikatseluun
    addProductToPreview(product);

    // Tyhjennä lomake seuraavaa syöttöä varten
    document.getElementById("laskuri").innerText= "0 / 200";
    document.getElementById('product-form').reset();
    alert('Ilmoitus lisätty kirppikselle!')
});

// Lisää yksittäinen tuote esikatseluun
function addProductToPreview(product) {
    viesti.style.display = "none";
    const productPreviews = document.getElementById('product-previews');

    const productPreview = document.createElement('div');
    productPreview.classList.add('product-preview-item');

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productNameElement = document.createElement('h3');
    productNameElement.textContent = product.name;
    productNameElement.id = 'tuotteenNimi'

    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = 'Kuvaus: ' + product.description;

    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = 'Hinta: ' + product.price + ' €';

    const kategoriaTietoElement = document.createElement('p');
    kategoriaTietoElement.textContent = 'Kategoria: ' + product.kategoria;

    const tyyppiElement = document.createElement('p');
    tyyppiElement.textContent = 'Tyyppi: ' + product.tyyppi;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Poista';
    deleteButton.classList.add('deleteButton');
    deleteButton.type = 'button';

    deleteButton.addEventListener('click', function() {
    const currentUser = localStorage.getItem("kayttajaTunnus");
    const addedByUser = product.addedBy;

    if (currentUser === addedByUser) {
        if (confirm("Vahvista tuotteen poisto.")) {
        // Käyttäjä voi poistaa oman lisäämänsä tuotteen
        productPreview.remove();
        // Poista tuote myös localStoragesta
        removeProductFromLocalStorage(product);
        } 
    }});

    productDetails.appendChild(productNameElement);
    productDetails.appendChild(productDescriptionElement);
    productDetails.appendChild(productPriceElement);
    productDetails.appendChild(kategoriaTietoElement);
    productDetails.appendChild(tyyppiElement);

    productPreview.appendChild(productDetails);
    productPreview.appendChild(deleteButton);

    productPreviews.appendChild(productPreview);
}

// Poista tuote localStoragesta
function removeProductFromLocalStorage(productToRemove) {
    let productList = JSON.parse(localStorage.getItem('productList')) || [];
    

    // Etsi tuote listasta ja poista se
    const updatedProductList = productList.filter(product => {
        return product.name !== productToRemove.name || 
               product.description !== productToRemove.description ||
               product.price !== productToRemove.price ||
               product.kategoria !== productToRemove.kategoria ||
               product.tyyppi !== productToRemove.tyyppi;
    });

    // Päivitä tuotelista localStorageen
    localStorage.setItem('productList', JSON.stringify(updatedProductList));
    let localLista = JSON.parse(localStorage.getItem('productList')) || [];
    if (localLista.length == 0) {
        viesti.style.display = "block";
        valiOtsikko2.style.display = "none";
    }
}
