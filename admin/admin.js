document.addEventListener('DOMContentLoaded', function () {
    // Haetaan tallennetut tuotteet localStoragesta
    let productList = JSON.parse(localStorage.getItem('productList')) || [];

    // Näytetään tuotteet järjestelmänvalvojalle (admin kansiossa admin.js)
    const productListElement = document.getElementById('product-list');

    const productsPerPage = 5; // Tuotteita per sivu
    let currentPage = 1;

    if (productList.length === 0) {
        viestiRuutuun();
    } else {
        paginateProducts(productList, productsPerPage, currentPage);
    }

    // Näytä tuotteet sivun latauduttua
    function displayProductsOnPage(products, page) {
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const displayedProducts = products.slice(startIndex, endIndex);

        productListElement.innerHTML = '';
        displayedProducts.forEach(function(product) {
            const productElement = createProductElement(product);
            productListElement.appendChild(productElement);
        });
    }

    // Funktio, joka jakaa tuotteet sivuille ja näyttää ensimmäisen sivun
    function paginateProducts(products, productsPerPage, currentPage) {
        // Lasketaan sivujen määrä
        const totalPages = Math.ceil(products.length / productsPerPage);

        // Näytetään ensimmäinen sivu
        displayProductsOnPage(products, currentPage);

        // Kuuntele sivunvaihtimien klikkauksia ja päivitä näytettävät tuotteet
        document.getElementById('nextPageButton').addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                displayProductsOnPage(products, currentPage);
            }
        });

        document.getElementById('prevPageButton').addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                displayProductsOnPage(products, currentPage);
            }
        });
    }

    // Funktio luo tuote-elementin
    function createProductElement(product) {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const productNameElement = document.createElement('h3');
        productNameElement.textContent = product.name;

        const productDescriptionElement = document.createElement('p');
        productDescriptionElement.textContent = product.description;

        const productPriceElement = document.createElement('p');
        productPriceElement.textContent = 'Hinta: ' + product.price + ' €';

        const kategoriaElement = document.createElement('p');
        kategoriaElement.textContent = 'Kategoria: ' + product.kategoria;

        const tyyppiElement = document.createElement('p');
        tyyppiElement.textContent = 'Tyyppi: ' + product.tyyppi;

        // Lisätään deleteButton jokaiselle tuotteelle
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Poista';
        deleteButton.classList.add('deleteButton2');
        deleteButton.type = 'button';

        deleteButton.addEventListener('click', function() {
            if (confirm("Vahvista tuotteen poisto.")) {
                // Poista tuote esikatselusta ja localStoragesta
                productElement.remove();
                // Poista tuote myös localStoragesta
                removeProductFromLocalStorage(product);
                if (productList.length === 0) {
                    viestiRuutuun();
                }
            }
        });

        productElement.appendChild(productNameElement);
        productElement.appendChild(productDescriptionElement);
        productElement.appendChild(productPriceElement);
        productElement.appendChild(kategoriaElement);
        productElement.appendChild(tyyppiElement);

        // Asetetaan deleteButton oikealle puolelle
        productElement.appendChild(deleteButton);
        return productElement;
    }

    // Poista tuote localStoragesta
    function removeProductFromLocalStorage(productToRemove) {
        productList = productList.filter(product => {
            return product.name !== productToRemove.name ||
                product.description !== productToRemove.description ||
                product.price !== productToRemove.price ||
                product.kategoria !== productToRemove.kategoria ||
                product.tyyppi !== productToRemove.tyyppi;
        });

        // Päivitä tuotelista localStorageen
        localStorage.setItem('productList', JSON.stringify(productList));
    }

    function viestiRuutuun() {
        document.getElementById("valiOtsikko").innerHTML = '<div style="margin-top: 100px"></div>';
        document.getElementById("sivuNumerointi").style.display = "none";
        document.getElementById("pagination").style.display = "none";
        document.getElementById("valiOtsikko").innerHTML = '<div style="margin-top: 100px"></div>';
        productListElement.innerHTML = '<h1 style="text-align: center;">Kirppiksellä ei ole ilmoituksia.</h1>';
    }
});
