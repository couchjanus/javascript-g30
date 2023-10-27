import { saveCart } from "/js/modules/helpers.js";
const productItemTemplate = (product) => `
<article class="product">

    <div class="icons" data-id="${product.id}">
        <a href="#" class="fas fa-shopping-cart add-to-cart"></a>
        <a href="#!" class="fas fa-heart add-to-wishlist"></a>
        <a href="#!" class="fas fa-eye detail"></a>
    </div>

    <div class="image">
        <img src="${product.image}">
    </div>

    <div class="content">
        <p>${product.name}</p>
        <div class="price">
            $${product.price}
        </div>
    </div>
</article>
`;



export function populateProductList(products) {
    let content = '';
    for (const item of products) {
        content += productItemTemplate(item);
    }
    return content;
}

function addProductToCart(cart, product, amount=1) {

    let inCart = cart.some(element => element.id === product.id);

    if (inCart) {
        cart.forEach(item => {
            if (item.id === product.id) {
                item.amount += amount;
            }
        })
    } else {

        let cartItem = {...product, amount: amount};
        cart = [...cart, cartItem];

    }

    saveCart(cart);

}

export function addProductToCartButton(cart) {
    let addToCartButtons = document.querySelectorAll('.add-to-cart');

    if (addToCartButtons) {
        addToCartButtons.forEach(item => {
            item.addEventListener('click', function(event) {

                let productId = event.target.closest('.icons').dataset.id;
                addProductToCart(cart, {id: productId});
                // if (!+totalInCart.innerText) {
                   
                //     changeStyle(totalInCart);
                // }
            
                // totalInCart.innerText = ++totalInCart.innerText;
            });
        })
    }
}