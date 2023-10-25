import { findItem, filterItem, saveCart } from "/js/modules/helpers.js";

const cartItemTemplate = (item, product) => `
<tr class="cart-item" id="id${product.id}">
    <td>${product.name}</td>
    <td>$<span class="product-price">${product.price}</span></td>
    <td class="qty">
        <div class="number-input quantity" data-id="${product.id}">
            <button class="btn-dec">-</button> 
            <input class="quantity-result"  type="number"  value="${item.amount}"  min="1"  max="10" required  />
            <button class="btn-inc">+</button>
        </div>
    </td>
    <td>$<span class="product-subtotal">0</span></td>
    <td><a href="#!" class="remove fas fa-trash-alt text-muted" data-id="${product.id}"></a></td>
</tr>
`;

export const populateShoppingCart = (cart, products) => {
    let result = '';
    cart.forEach(element => {
        result += cartItemTemplate(element, findItem(products, element.id))
    });

    return result;
}

function setCartTotal(cartItems, cart) {

    let tmpTotal = 0;
    let subTotal = 0;

    cart.map(item => {
        let price = cartItems.querySelector(`#id${item.id} .product-price`).textContent;
        tmpTotal = +price * item.amount;

        cartItems.querySelector(`#id${item.id} .product-subtotal`).textContent = parseFloat(tmpTotal.toFixed(2));

        subTotal += parseFloat(tmpTotal.toFixed(2));
    });

    document.querySelector('.cart-subtotol').textContent = subTotal;


}

export function renderCart(cartItems, cart) {
    setCartTotal(cartItems, cart);

    cartItems.addEventListener('click' , event => {
        if (event.target.classList.contains('fa-trash-alt')) {
            cart = filterItem(cart, event.target.dataset.id);
            setCartTotal(cartItems, cart);
            saveCart(cart);
            event.target.closest('.cart-item').remove();
        } else if (event.target.classList.contains('btn-inc')) {
            console.log(event.target.closest('.quantity').dataset.id)
            let tmp = findItem(cart, event.target.closest('.quantity').dataset.id);
         
            tmp.amount += 1;
            event.target.previousElementSibling.value = tmp.amount;
            setCartTotal(cartItems, cart);
            saveCart(cart);
        }
    });
}

