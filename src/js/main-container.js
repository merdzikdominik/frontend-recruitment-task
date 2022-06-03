const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" type="text/css" href="src/scss/main.css">
    <section class="main-module">
        <div class="main-module-image__container">
            <img class="displayedPicture" alt="picture representing the beach and the sea on the right side"/>
        </div>
        <div class="main-module-content__container">
            <div class="content">
                <h1>Lorem Ipsum</h1>
                <p>Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures amd SaaS platforms, managed via a single app with no hardware required</p>
            </div>
            <button>Button</button>
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