import { overlayInitHandler } from './helpers/overlay-helper.js';

const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="src/css/main.css">
    <section class="main-module">
        <div class="main-module-image__container">
            <img class="displayed-picture" alt="picture representing the beach and the sea on the right side"/>
        </div>
        <div class="main-module-content__container">
            <div class="content">
                <h1></h1>
                <p></p>
                <custom-button content="Button"></custom-button>
            </div>
        </div>
    </section>
`;

class ContentLoader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    };

    static get observedAttributes() {
        return ['picture', 'content', 'title'];
    };

    // method fires after pressing the first button on the main page, as the name indicates it loads the overlay with the popup message
    loadOverlay() {
        this.shadowRoot.querySelector('custom-button').addEventListener('click', overlayInitHandler);
    };

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('h1').textContent = this.getAttribute('title');
        this.shadowRoot.querySelector('.displayed-picture').src = this.getAttribute('picture');
        this.shadowRoot.querySelector('p').textContent = this.getAttribute('content');
    };

    connectedCallback() {
        this.loadOverlay();
    };
}

export default ContentLoader;