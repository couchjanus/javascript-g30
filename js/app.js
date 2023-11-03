'use strict';
// import { Store } from "./modules/store";
import { Store } from "/js/modules/store.js";
import { populateShoppingCart, renderCart } from "/js/modules/cart.js";
import { findItem, cartItemsAmount, fetchData } from "/js/modules/helpers.js";
import {populateProductList, addProductToCartButton} from "/js/modules/catalog.js";
import { populateCategories, renderCategory, renderShowOnly, renderSelect } from "/js/modules/categories.js";

import Footer from './components/footer.js';
customElements.define('footer-component', Footer);

import Services from './components/services.js';
customElements.define('services-component', Services);
import Breadcrumb from './components/breadcrumb.js';
customElements.define('breadcrumb-component', Breadcrumb);
import Carousel from './components/carousel.js';
customElements.define('carousel-component', Carousel);

let cart = [];
let wishlist = [];
const modalWindow= document.querySelector('.modal-window');

const makeTitle = (icon, title) => `
<h3><svg class="svg-icon mb-4 text-primary svg-icon-light">
    <use xlink:href="#${icon}"> </use>
</svg> ${title}</h3>
`;

const makeContacts = (item) => {
    let content = makeTitle(item.icon, item.title);

    for (let [key, value] of Object.entries(item)) {
        if (!(key == 'icon' || key == 'title')) {
            if (key == 'email') {
                value = `<a class="btn btn-link" href="mailto:${value}">${value}</a>`;
            }
            content +=`<p>${value}</p>`
        }  
    }

    
    return content;
};

console.log(makeTitle('map-marker-1', 'Address'));



function saveWishlist(wishlist) {
    Store.set('wishlist', wishlist);
}


function addProductToWishlist(product) {
    let inWishlist = wishlist.some(element => element.id === product.id);

    if (!inWishlist) {
        let cartItem = {...product};
        wishlist = [...wishlist, cartItem];
    }
    saveWishlist(wishlist);

}

function addProductToWishlistButton() {
    let addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');

    if (addToWishlistButtons) {
        addToWishlistButtons.forEach(item => {
            item.addEventListener('click', function(event) {

                let productId = event.target.closest('.icons').dataset.id;
                addProductToWishlist({id: productId});
                
            });
        })
    }
}



const modalTemplate = (product) =>`
<div class="modal">
   <div class="modal-dialog">
     <a href="#!" title="Close" class="close btn-close fas fa-times"></a>
     <div class="modal-body">
       <aside><img src="${product.image}"></aside>
       <main>
         <div class="info-container">
           <div class="info-header"><h2>${product.name}</h2></div>

           <div class="info-price">$${product.price}</div>
           <div class="info-shipping">Free shipping</div>
                  
           <div class="info-button">
               <a href="#!" class="btn btn-submit add-to-cart" data-id="${product.id}"><i class="fas fa-cart-plus"></i> Add to Cart</a>
           </div>
           <h3 class="qty-header py-2">Amount:</h3>    
           <div class="qty qty-buttons">
               <div class="number-input quantity" data-id="${product.id}">
                   <button class="btn-dec">-</button> 
                   <input class="quantity-result"  type="number"  value="1"  min="1"  max="10"   required  />
                   <button class="btn-inc">+</button>
               </div>
           </div>
           <div class="info-description">${product.description}</div>
           <a class="btn btn-link text-dark text-decoration-none" href="#!" data-id="${product.id}"><i class="far fa-heart add-to-wishlist"></i>Add to wish list</a>
         </div>
       </main>
     </div>
   </div>
</div>`;

function renderModal(cart) {
    

    modalWindow.querySelector('.btn-inc').addEventListener('click', e => {
        let val = e.target.previousElementSibling.value;
        val++;
        e.target.previousElementSibling.value = val;
        
    });

    modalWindow.querySelector('.btn-dec').addEventListener('click', e => {
        let val = e.target.nextElementSibling.value;
        if (val > 1) {
            val--;
        }
        e.target.nextElementSibling.value = val;
       
    });


    let quantityResult = modalWindow.querySelector('.quantity-result');

    // console.log(quantityResult)
    let addToCart = modalWindow.querySelector('.add-to-cart');

    addToCart.addEventListener('click', e => {
        let productId = e.target.dataset.id;
        addProductToCart({id: productId},  +quantityResult.value);
    });


}

function toggleModal(cart, param, product={}) {
    // console.log(modalWindow)
    if (modalWindow.innerHTML=='') {
        modalWindow.innerHTML = modalTemplate(product);
        renderModal(cart);
    } else {
        modalWindow.innerHTML = '';
    }

    modalWindow.style.display = param;
}

function detailButton(cart, products) {
    let detailButtons = document.querySelectorAll('.detail');

    // console.log(detailButtons);
    detailButtons.forEach(button => {
        button.addEventListener('click', event => {
            let productId = event.target.closest('.icons').dataset.id;
            // console.log(productId);
            // let product = products.find(item => item.id === +productId);
            let product = findItem(products,productId);

            toggleModal(cart, 'block', product);

            document.querySelector('.btn-close').addEventListener('click', event => {
                toggleModal(cart, 'none');
            })

            // console.log(product);
        })
    })

}


function main() {

    cart = Store.init('basket');
    wishlist = Store.init('wishlist');
    cartItemsAmount(cart);

    const totalInWishlist  = document.getElementById('total-in-wishlist');
    
    const productContainer = document.querySelector('.product-container');

    // 

    const url = 'http://localhost:3000';

    // fetchData(`${url}/products`)
    // .then(products => console.log(products));

    fetchData(`${url}/products`)
    .then(products => {
        if (productContainer) {
            
            productContainer.innerHTML = populateProductList(products);
            addProductToCartButton(cart);
            addProductToWishlistButton();
            detailButton(cart, products);

            const categoryContainer = document.getElementById('category-container');
            fetchData(`${url}/categories`)
            .then(categories => {
                if (categoryContainer) {
                    populateCategories(categoryContainer, categories);
                    renderCategory(productContainer, '#category-container', products, cart)
                }
            });
            const showOnly = document.getElementById('show-only');
            if (showOnly) {
                renderShowOnly(showOnly, products, productContainer) 
            }

            const selectPicker = document.querySelector('.selectpicker');

            if (selectPicker) {
                renderSelect(selectPicker, products, productContainer, cart); 
            }

        }

        const cartPage = document.getElementById('cart-page');
        if (cartPage) {
            const shoppingCartItems = cartPage.querySelector('.shopping-cart-items');
            shoppingCartItems.innerHTML = populateShoppingCart(cart, products);

            renderCart(shoppingCartItems, cart);
        }
    
    });
        const contactSidebar = document.querySelector('.contact-sidebar');

        if (contactSidebar) {

            const addressBox = document.querySelector('.contact-sidebar .address');

            let content = '';

            for (let [key, value] of Object.entries(contacts)) {
                content += makeContacts(value);
            }

            addressBox.innerHTML = content;

        }
        
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => main())
} else {
    main();
}