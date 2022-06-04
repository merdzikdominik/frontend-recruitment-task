import { overlayInit } from './helpers/overlay-helper.js';

const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/scss/main.css">
    <section class="main-module">
        <div class="main-module-image__container">
            <img class="displayed-picture" alt="picture representing the beach and the sea on the right side"/>
        </div>
        <div class="main-module-content__container">
            <div class="content">
                <h1>Lorem Ipsum</h1>
                <p></p>
                <button>Button</button>
            </div>
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
        return ['picture', 'content'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('.displayed-picture').src = this.getAttribute('picture');
        this.shadowRoot.querySelector('p').textContent = this.getAttribute('content');
    };

    connectedCallback() {
        this.shadowRoot.querySelector('button').addEventListener('click', overlayInit);
    }
};

window.customElements.define('main-module', MainModule);