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
