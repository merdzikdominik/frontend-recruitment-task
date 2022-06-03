const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" type="text/css" href="src/scss/main.css">
    <section class="main-module">
        <div class="main-module-image__container">
            <img class="displayedPicture"/>
        </div>
        <div class="main-module-content__container">
        
        </div>
    </section>
`;

class MainModule extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    };

    static get observedAttributes() {
        return ['picture'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('.displayedPicture').src = this.getAttribute('picture');
    };
};

window.customElements.define('main-module', MainModule);