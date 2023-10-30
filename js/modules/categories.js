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

const badgeTemplate = item => `
<div class="form-check mb-1"><input class="form-check-input" type="checkbox" id="id-${item}" value="${item}" name="badge"> <label class="form-check-label" for="id-${item}">${item}</label></div>
`;

const renderList = (products, value) => populateProductList(products.filter(product => product.badge.title.includes(value)));

export const renderShowOnly = (showOnly, products, container) => {
    let badges = [...new Set([...products.map(item => item.badge.title)].filter(item => item != ''))];
    showOnly.innerHTML = badges.map(item => badgeTemplate(item)).join(" ");


    let checkboxes = showOnly.querySelectorAll('input[name="badge"]');

    let values = [];

    checkboxes.forEach(item => {
        item.addEventListener("change", e => {
            if (e.target.checked) {
                values.push(item.value)
                container.innerHTML = values.map(value => renderList(products, value)).join("");
            }else {
                if (values.length != 0) {
                    values.pop(item.value);
                    container.innerHTML = values.map(value => renderList(products, value)).join("");
                }
            }
            if (values.length == 0) {
                container.innerHTML = populateProductList(products);
            }
        })
    })
}


const sortingOrders = [
    {key: "default", value: "Default Sorting"},
    {key: "popularity", value: "Popilarity Products"},
    {key: "low-high", value: "Low to High Price"},
    {key: "high-low", value: "High to Low Price"},
];

const sortingOptions = () => sortingOrders.map(item => `<option value="${item.key}">${item.value}</option>`).join('');

const compare = (key, order='acs') => (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;
    const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
    let comparison = 0;

    comparison = (A > B) ? 1 : -1;
    return (order === 'decs') ? -comparison : comparison;
}

export function renderSelect(picker, products, container, cart) {
    picker.innerHTML = sortingOptions();
    picker.addEventListener("change", function() {
        switch(this.value) {
            case "low-high":
                container.innerHTML = populateProductList(products.sort(compare('price', 'acs')));
                break;
            case "high-low":
                container.innerHTML = populateProductList(products.sort(compare('price', 'decs')));
                break;
            case "popularity":
                container.innerHTML = populateProductList(products.sort(compare('stars', 'acs')));
                break;
            default:
                container.innerHTML = populateProductList(products.sort(compare('id', 'acs')));
        }
        
    })
}