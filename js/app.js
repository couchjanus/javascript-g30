'use strict';

// let arr = [1,2,,'test',['hello', 'World'],{name: 'john', last_name:'Doe'},,3];
// console.log(arr.length)
// console.log(arr[3])
// console.log(arr[arr.length - 1])

// const arr1 = "1, First st., Kyiv".split(',')
// console.log(arr1)


// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i])
//     i++ 
// }


//  do {
//     console.log(arr[i])
//     i++ 
// } while (i < arr.length)
let firstName = 'John',
   lastName = 'Doe';
let greeting = `Hi ${firstName}, ${lastName}`;
// console.log(greeting); // Hi John, Doe

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

function main() {
    const totalInWishlist  = document.getElementById('total-in-wishlist');
    const totalInCart  = document.getElementById('total-in-cart');
    
    // let addToWishlist = document.querySelector('.add-to-wishlist');
    let addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');
    // let addToCart = document.querySelector('.add-to-cart');
    
    const changeStyle = (item) => item.classList.add(["not-empty"]);
    
    // if (addToWishlist) {
    //     addToWishlist.addEventListener('click', function() {
    
    //         if (!+totalInWishlist.innerText) {
    //             console.log(totalInWishlist.innerText);
    //             changeStyle(totalInWishlist);
    //         }
    //         totalInWishlist.innerText = ++totalInWishlist.innerText;
    //     });

    // }

    if (addToWishlistButtons) {
        addToWishlistButtons.forEach(item => {
            item.addEventListener('click', function() {
    
                if (!+totalInWishlist.innerText) {
                    console.log(totalInWishlist.innerText);
                    changeStyle(totalInWishlist);
                }
                totalInWishlist.innerText = ++totalInWishlist.innerText;
            });
    
        })
    }
    
    // if (addToCart) {
    //     addToCart.addEventListener('click', function() {
    
    //         if (!+totalInCart.innerText) {
               
    //             changeStyle(totalInCart);
    //         }
        
    //         totalInCart.innerText = ++totalInCart.innerText;
    //     });

    // }

    let addToCartButtons = document.querySelectorAll('.add-to-cart');

    if (addToCartButtons) {
        addToCartButtons.forEach(item => {
            item.addEventListener('click', function() {
    
                if (!+totalInCart.innerText) {
                   
                    changeStyle(totalInCart);
                }
            
                totalInCart.innerText = ++totalInCart.innerText;
            });
        })
    }

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