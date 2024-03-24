const edellinenSivu = document.getElementById("prevPageButton");
const seuraavaSivu = document.getElementById("nextPageButton");

document.addEventListener('DOMContentLoaded', function () {
    // Haetaan tallennetut tuotteet localStoragesta
    const productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Näytetään tuotteet etusivulla
    const productListElement = document.getElementById('product-list');

    // Tarkistetaan localStoragen tila
    if (productList.length ===  0) {
        document.getElementById("valiOtsikko").innerHTML = '<div style="margin-top: 100px"></div>';
        document.getElementById("sivuNumerointi").style.display = "none";
        document.getElementById("pagination").style.display = "none";
        productListElement.innerHTML = '<h1 style="text-align: center;">Kirppiksellä ei ole ilmoituksia.</h1>';
    }

    productList.forEach(function(product) {
        const productElement = createProductElement(product);
        productListElement.appendChild(productElement);
    });

    // Kutsutaan paginateProducts-funktiota productList-parametrilla
    paginateProducts(productList);
});

// Funktio, joka jakaa tuotteet sivuille ja näyttää ensimmäisen sivun
function paginateProducts(products) {
    // Tarkista, onko tuotelista tyhjä
    if (products.length === 0) {
        return;
    }

    // Lasketaan sivujen määrä
    const totalPages = Math.ceil(products.length / productsPerPage);
        if (totalPages >= productsPerPage - 1) {
            seuraavaSivu.style.display = "inline-block";
        }

    // Kuuntele sivunvaihtimien klikkauksia ja päivitä näytettävät tuotteet
    document.getElementById('nextPageButton').addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            sivuNro.innerHTML = currentPage
            displayProductsOnPage(products, currentPage);
        }

        if (currentPage === totalPages) {
            edellinenSivu.style.display = "inline-block";
            seuraavaSivu.style.display = "none";
        } else {
            edellinenSivu.style.display = "inline-block";
        }
    });

    document.getElementById('prevPageButton').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            sivuNro.innerHTML = currentPage
            displayProductsOnPage(products, currentPage);
        }

            seuraavaSivu.style.display = "inline-block";
            if (currentPage === 1) {
                edellinenSivu.style.display = "none";
            }
    });

    // Näytä ensimmäinen sivu
    displayProductsOnPage(products, currentPage);
}

// Luo yksittäisen tuotteen HTML-elementin
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productNameElement = document.createElement('h3');
    productNameElement.textContent = product.name;

    const contactLink = document.createElement('a');
    contactLink.textContent = 'Ota yhteyttä ilmoittajaan';
    contactLink.href = `yhteydenottoLomake.html?name=${encodeURIComponent(product.name)}&description=${encodeURIComponent(product.description)}&price=${encodeURIComponent(product.price)}&kategoria=${encodeURIComponent(product.kategoria)}&tyyppi=${encodeURIComponent(product.tyyppi)}`;

    const productDescriptionElement = document.createElement('p');
    productDescriptionElement.textContent = 'Kuvaus: ' + product.description;

    const productPriceElement = document.createElement('p');
    productPriceElement.textContent = 'Hinta: ' + product.price + ' €';

    const kategoriaElement = document.createElement('p');
    kategoriaElement.textContent = 'Kategoria: ' + product.kategoria;

    const tyyppiElement = document.createElement('p');
    tyyppiElement.textContent = 'Tyyppi: ' + product.tyyppi;

    productElement.appendChild(productNameElement);
    productElement.appendChild(productDescriptionElement);
    productElement.appendChild(productPriceElement);
    productElement.appendChild(kategoriaElement);
    productElement.appendChild(tyyppiElement);
    productElement.appendChild(contactLink); // Lisää linkki tuotteen nimen jälkeen

    return productElement;
}

// Funktio, joka näyttää tietyn sivun tuotteet
function displayProductsOnPage(products, pageNumber) {
    const startIndex = (pageNumber - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = products.slice(startIndex, endIndex);
    displayProducts(productsToShow);
}

// Funktio, joka näyttää tuotteet käyttöliittymässä
function displayProducts(products) {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = ''; // Tyhjennetään lista ennen kuin lisätään uudet tuotteet
    products.forEach(function(product) {
        const productElement = createProductElement(product);
        productListElement.appendChild(productElement);
    });
}

// Määritellään kuinka monta tuotetta näytetään per sivu
const productsPerPage = 8;
let currentPage = 1;

