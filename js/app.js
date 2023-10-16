'use strict';


// let obj = {
//     key: "Hello",
//     numb: 123,
//     'my key': "Hello world",
//     test1: function*() {
//         return "This is test";
//     }
// }
// console.log(obj.key);
// console.log(obj.numb);
// console.log(obj['my key']);
// console.log(typeof(obj))
// let tst = obj.test1();
// console.log(tst);

// console.dir(window.document.body);
// console.dir(window.document.head);
// console.dir(window.document.title);

// console.dir(document.all);
// console.dir(document.all[55]);

// document.all[55].innerText = "Hello DOM!";
// let h2_collection = document.querySelectorAll('h2');
// console.log(h2_collection[2]);

// h2_collection[2].innerText = "Hello item number 2";

// let product_collection = document.querySelectorAll('.product');
// let product_collection = document.getElementsByClassName('product');
// console.log(product_collection[2]);

// let h2_first = document.querySelector('h2');
// console.log(h2_first);


// toggler
// console.log(toggler);


// let this_toggler = document.getElementById('toggler');

// console.log(this_toggler);

function main() {
    const totalInWishlist  = document.getElementById('total-in-wishlist');
    const totalInCart  = document.getElementById('total-in-cart');
    
    let addToWishlist = document.querySelector('.add-to-wishlist');
    let addToCart = document.querySelector('.add-to-cart');
    
    const changeStyle = (item) => item.classList.add(["not-empty"]);
    // console.log(totalInWishlist.innerText);
    // console.log(totalInWishlist.innerText + 1 == true);
    addToWishlist.addEventListener('click', function() {
        // totalInWishlist.style.color = "red";
        // totalInWishlist.style.cssText = "color:red; opacity:1; font-weight:700";
        // totalInWishlist.className = 'not-empty';
    
        if (!+totalInWishlist.innerText) {
            console.log(totalInWishlist.innerText);
            changeStyle(totalInWishlist);
        }
        // changeStyle(totalInWishlist);
        totalInWishlist.innerText = ++totalInWishlist.innerText;
    });
    
    addToCart.addEventListener('click', function() {
    
        if (!+totalInCart.innerText) {
           
            changeStyle(totalInCart);
        }
    
        totalInCart.innerText = ++totalInCart.innerText;
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => main())
} else {
    main();
}