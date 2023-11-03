import { Store } from "/js/modules/store.js";

export const findItem = (items, id) => items.find(item => item.id == id);

export const filterItem = (items, id) => items.filter(item => item.id != id);

const changeStyle = (item) => item.classList.add(["not-empty"]);

export function cartItemsAmount(cart) {
    const totalInCart  = document.getElementById('total-in-cart');
    
    if (!+totalInCart.innerText) {
                   
        changeStyle(totalInCart);
    }
            
    totalInCart.innerText = cart.reduce((prev, current) => prev + current.amount, 0);
}

export function saveCart(cart) {
    Store.set('basket', cart);
    cartItemsAmount(cart);
}


export function fetchData(url) {
    return fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(response => {
        if (response.status >= 400) {
            return response.json().then(error => {
                const err = new Error('Something went wrong!')
                err.data = error;
                throw err;
            })
        }
        return response.json();
    })
}