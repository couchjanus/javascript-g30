import { fetchData } from "/js/modules/helpers.js";

const template = document.createElement('template');

template.innerHTML = `
<style>

.carousel {
    align-items: center;
    background: white;
    display: flex;
    justify-content: center;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-250px * 7));
    }
}

.slider {
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 960px;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .2);
}

.slider .slide img {
    display: block;
    height: 100px;
    width: 250px;
    object-fit: cover;
}

.slider .slide-track {
    display: flex;
    width: calc(250px * 14);
    animation: scroll 40s linear infinite;
}

.slider::before, .slider::after {
    content: "";
    position: absolute;
    width: 200px;
    background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 2;
    height: 100px;
}

.slider::before {
    top: 0;
    left: 0;
}


.slider::after {
    top: 0;
    right: 0;
    transform: rotateZ(180deg);
}

.category-item {
    display: block;
    position: relative;
}

.category-item-title {
    display: inline-block;
    padding: .5rem 1rem;
    color: var(--ancor-color);
    background-color: white;
    text-transform: uppercase;
    letter-spacing: .09em;

    box-shadow: 0 0 15px rgba(0, 0, 0, .2);

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
<div class="carousel">
    <div class="slider">
        <div class="slide-track">
        </div>
    </div>
</div>
`;

export default class Carousel extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        const templateContent = template.content;
        this.shadow.appendChild(templateContent.cloneNode(true));
   }

   get url() {
     return this.getAttribute('url');
   }

   get site_url() {
     return this.getAttribute('site_url');
   }
  

   carouselItemTemplate = (item) => `
   <div class="slide carousel-item">
   <a class="category-item" href="#!" data-category="${item.id}">
       <img src="${this.site_url}/images/product-${item.id}.jpg" alt="Electronic" height="100" with="250">
       <strong class="category-item-title" data-category="${item.id}">${item.name}</strong>
   </a>
   </div>`;

 connectedCallback() {
   this.setupCarousel();
 }

 setupCarousel() {
    const container = this.shadow.querySelector('.slide-track');
    ( () => {
        fetchData(`${this.url}/categories`)
        .then(categories => {
            const sliced_categories = categories.slice(0, 7);
            const concated_categories = sliced_categories.concat(categories.slice(0, 7));
            let result = concated_categories.map(item => this.carouselItemTemplate(item)).join(" ");
            container.innerHTML = result;
        });
    })();
  }
}
    