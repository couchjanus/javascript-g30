const template = document.createElement('template');

template.innerHTML =  `
<style>
.bg-light {
    background-color: rgba(0,0,0,0.025);
}
.container {
    width: 100%;
    padding: 0 1rem 0 1rem;
    padding: 0 1rem;
    margin: 0 auto;
}


@media (min-width: 576px) {
    .container {
        max-width: 540px;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

@media (min-width: 992px) {
    .container {
        max-width: 960px;
    }
}
@media (min-width: 1252px) {
    .container {
        max-width: 1200px;
    }
}

@media (min-width: 1400px) {
    .container {
        max-width: 1340px;
    }
}

.row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.svg-icon {
    width: 32px;
    height: 32px;
    vertical-align: text-bottom;
    stroke-width: 3;
    stroke: #130f40;
}

.svg-icon:hover {
    stroke: red;
}
.svg-icon-light {
    stroke-width:2;
}
.svg-icon-big {
    width: 48px;
    height: 48px;
}

.d-inline-block {
    display: inline-block;
}
.d-flex {
    display:flex;
}

@media (min-width: 992px) {
    .col-lg-4 {
        width: calc(100% / 3);
        flex: 0 0 auto;
    }
    
}

.py-3 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.py-5 {
    padding-top: 3rem;
    padding-bottom: 3rem;
}
</style>
<section class="py-5 bg-light">
<div class="container">
<div class="row text-center py-3 services"></div>
</div>
</section>`;

export default class Services extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'closed'});
        this.shadow.appendChild(template.content);
    }

    svgContent(i)  {
        switch(i) {
            case 0: return `<path d="M62 46v-5l-8-7h-8"></path><circle cx="24" cy="54" r="4"></circle> <circle cx="54" cy="54" r="4"></circle><path d="M50 54H28m-8 0h-4v-8h46v8h-4M24.5 24H46v22m-30 0V29.8M2 38h6m-2 8h2"></path><circle cx="14" cy="18" r="12"></circle> <path d="M14 12v8h6"></path>`;
            case 1: return `<path d="M52.3 48.8c1.2.8 3 1.9 2.7 4.3S51 62 43 62s-17.7-6.3-26.2-14.8S2 28.9 2 21 9 9.3 10.9 9s3.6 1.5 4.3 2.7l6 9.2a4.3 4.3 0 0 1-1.1 5.8c-2.6 2.1-6.8 4.6 2.9 14.3s12.3 5.4 14.3 2.9a4.3 4.3 0 0 1 5.8-1.1z"></path><path d="M54 2l-6 14h14m-4-6v12m-14 0H32l8.5-10v-.2A6 6 0 0 0 32 3.6"></path>`;
            case 2: return `<path d="M25.6 61L3 38.4 38.4 3l21.2 1.4L61 25.6 25.6 61z"></path><circle cx="48" cy="15" r="4" ></circle><path d="M31.3 21.4l11.3 11.3m-22.6 0l8.5 8.5M25.6 27l5.7 5.7"></path>`;
            }
     }

    makeIcon(node, i) {
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        
        iconSvg.setAttribute('fill', 'none');
        iconSvg.setAttribute('viewBox', '0 0 64 64');
        iconSvg.setAttribute('stroke', 'black');
        iconSvg.classList.add('svg-icon', 'svg-icon-big', 'svg-icon-light');
        iconSvg.innerHTML = this.svgContent(i)
        
        return node.appendChild(iconSvg);
    }

    makeServicesBlock() {
        const serviceDescription = [
        { title: 'Free shipping', description: 'Free shipping worldwide' },
        { title: '24 x 7 service', description: 'Free shipping worldwide' },
        { title: 'Festivaloffers', description: 'Free shipping worldwide' }
        ]
        const srvContainer = (item) => `
        <div class="col-lg-4 px-3"> 
            <div class="d-inline-block">
                <div class="d-flex align-items-end icon srv">
                  <div class="text-start ms-3">
                    <h4 class="text-uppercase mb-1">${item.title}</h4>
                    <p class="text-sm mb-0 text-muted">${item.description}</p>
                  </div> 
                </div> 
            </div> 
        </div>`
        let result = serviceDescription.map(item => srvContainer(item)).join(" ");
        return result
    }
 
    connectedCallback() {
        const services = this.shadow.querySelector('.services');
        services.innerHTML = this.makeServicesBlock()
        const srvs = this.shadow.querySelectorAll('.srv');
        srvs.forEach((node, i) => this.makeIcon(node, i))
 
    }
}
