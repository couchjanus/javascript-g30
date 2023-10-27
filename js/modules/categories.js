import {populateProductList, addProductToCartButton} from "/js/modules/catalog.js";

let liElement = (obj) => `
<li><a class="reset-anchor category-item" href="#!" data-id="${obj.id}">${obj.name}</a></li>
`;

let ulElement = items => {
    let ul = document.createElement('ul');
    ul.setAttribute('class', "list-unstyled text-muted categories");

    let res = '';
    for (let item of items) {
        res += liElement(item);
    }
    ul.innerHTML = res;
    return ul;
}

let sectionTitle = section => {
    let div = document.createElement('div');
    div.setAttribute('class', "py-2 px-4 bg-dark text-white mb-3");
    div.innerHTML = `<strong class="text-uppercase fw-bold">${section}</strong>`;
    return div;
}


function distinctSections(items) {

    let mapped = [...items.map(item => item.section)];

    let unique = [...new Set(mapped)];
    return unique;
}

function catgegoriesCollation(distinct, categories) {
    let result = []
    let i = 0;

    for (let section of distinct) {
        result[i] = categories.filter(obj => obj.section === section);
        i++;
    }
    return result;
}

export const populateCategories = (container, categories) => {

    let distinct = distinctSections(categories)

    let collation = catgegoriesCollation(distinct, categories);

    for (let i=0; i<distinct.length; i++) {
        container.append(sectionTitle(distinct[i]));
        container.append(ulElement(collation[i]));
    }
}

export function renderCategory(container, selector, products, cart) {
    const categoryItems = document.querySelectorAll(selector);
    categoryItems.forEach(item => item.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains('category-item')) {
            const category = e.target.dataset.id;
            const categoryFilter = items => items.filter(item => item.category == category);
            container.innerHTML = populateProductList(categoryFilter(products));

        }else {
            container.innerHTML = populateProductList(products);

        }

        addProductToCartButton(cart);
        // addProductToWishlistButton();
        // detailButton(cart, products);

    }))
}